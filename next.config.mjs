import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export for GitHub Pages
    output: "export",

    // Optional: if your repo is deployed to https://username.github.io/Portfolio/
    // basePath: "/Portfolio",
    // assetPrefix: "/Portfolio/",
};

export default withSentryConfig(
    nextConfig,
    {
        // Sentry Webpack plugin options
        silent: true, // suppress build logs
        org: "javascript-mastery",
        project: "javascript-nextjs",
    },
    {
        // Sentry Next.js options
        widenClientFileUpload: true,
        transpileClientSDK: true,
        hideSourceMaps: true,
        disableLogger: true,
        automaticVercelMonitors: false, // set false for GitHub Pages
    }
);
