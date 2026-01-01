
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { glob } from 'glob';

// Configuration
const SOURCE_DIR = '/Volumes/SAGAR 128GB/Behance Projects For Portfolio Website/projects';
const DEST_DIR = './public/projects';
const DATA_FILE = './src/data/projects.js';
const TARGET_WIDTH = 1920;
const QUALITY = 80;

function formatCategoryName(dirName) {
    // Convert "Social_Media_Design" to "Social Media Design"
    return dirName.replace(/_/g, ' ');
}

async function processImages() {
    console.log('🚀 Starting asset optimization & Manifest Generation...');

    if (!fs.existsSync(SOURCE_DIR)) {
        console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
        process.exit(1);
    }

    // Get all categories from Source
    const categories = fs.readdirSync(SOURCE_DIR).filter(file => {
        return fs.statSync(path.join(SOURCE_DIR, file)).isDirectory();
    });

    const projectData = [];

    for (const category of categories) {
        const categoryPath = path.join(SOURCE_DIR, category);
        const projects = fs.readdirSync(categoryPath).filter(f => !f.startsWith('.')); // Simple filter

        // We want to group by Project Wrapper if it exists, or just treat files as project?
        // User said: "single category... single project, there are multiple images".
        // So structure is: Category -> ProjectFolder -> Images
        // OR Category -> Images (if simple).
        // Let's assume nested folders based on "Project in single category... multiple images".

        const categoryObj = {
            id: category,
            title: formatCategoryName(category),
            projects: []
        };

        for (const project of projects) {
            const projectPath = path.join(categoryPath, project);
            const stats = fs.statSync(projectPath);

            if (stats.isDirectory()) {
                // It is a project folder
                const images = await glob('**/*.{jpg,jpeg,png,webp,avif}', { cwd: projectPath, nodir: true });
                if (images.length === 0) continue;

                // Sort images naturally (1.jpg, 2.jpg, 10.jpg)
                images.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

                const processedImages = [];

                for (const img of images) {
                    const srcFile = path.join(projectPath, img);
                    const destRelPath = path.join(category, project, img.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
                    const destFile = path.join(DEST_DIR, destRelPath);

                    // Ensure dir exists
                    fs.mkdirSync(path.dirname(destFile), { recursive: true });

                    // Process if not exists
                    if (!fs.existsSync(destFile)) {
                        try {
                            await sharp(srcFile)
                                .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
                                .webp({ quality: QUALITY, effort: 4 }) // Faster effort
                                .toFile(destFile);
                            console.log(`✅ Generated: ${destRelPath}`);
                        } catch (e) {
                            console.error(`❌ Failed: ${srcFile}`, e);
                        }
                    } else {
                        // console.log(`⏩ Skipped: ${destRelPath}`);
                    }

                    processedImages.push(`/projects/${destRelPath}`);
                }

                categoryObj.projects.push({
                    id: project,
                    title: formatCategoryName(project),
                    images: processedImages
                });
            }
        }

        if (categoryObj.projects.length > 0) {
            projectData.push(categoryObj);
        }
    }

    // Write Data File
    const fileContent = `export const projectsData = ${JSON.stringify(projectData, null, 2)};`;
    fs.writeFileSync(DATA_FILE, fileContent);
    console.log(`🎉 Data manifest written to ${DATA_FILE}`);
}

processImages();
