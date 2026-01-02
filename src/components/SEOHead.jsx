import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ title, description, url = "https://sagarv.design" }) => {

    // Default Fallbacks
    const siteTitle = "Sagar Vaishnava | Visual Strategist";
    const defaultDescription = "Portfolio of Sagar Vaishnava. Designing the unignorable. Specializing in high-end brand identity and digital experience.";

    const finalTitle = title ? `${title} | Sagar V.` : siteTitle;
    const finalDescription = description || defaultDescription;

    return (
        <Helmet>
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={finalTitle} />
            <meta property="twitter:description" content={finalDescription} />
        </Helmet>
    );
};

export default SEOHead;
