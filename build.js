const fs = require('fs');
const path = require('path');

const CONFIG = require('./config.js');

// ===== Skill Icon SVGs =====
function getSkillIcon(type) {
    const icons = {
        web: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
        mobile: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`,
        backend: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H4v-2h7v2zm0-4H4v-2h7v2zm0-4H4V7h7v2zm8.25 6.25L16.5 12.5l2.75-2.75-1.5-1.5-4.25 4.25 4.25 4.25 1.5-1.5z"/></svg>`,
        other: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>`
    };
    return icons[type] || icons.other;
}

// ===== Architecture Icon SVGs =====
function getArchIcon(type) {
    const icons = {
        database: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V13zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2V6.77C7.61 7.55 9.72 8 12 8s4.39-.45 6-1.23V9z"/></svg>`,
        backend: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H4v-2h7v2zm0-4H4v-2h7v2zm0-4H4V7h7v2zm8.25 6.25L16.5 12.5l2.75-2.75-1.5-1.5-4.25 4.25 4.25 4.25 1.5-1.5z"/></svg>`,
        frontend: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>`
    };
    return icons[type] || '';
}

// Frontend nodes use a different icon (shopping cart for Nexus Web)
function getArchFrontendIcon(name) {
    if (name.toLowerCase().includes('web')) {
        return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>`;
    }
    return getArchIcon('frontend');
}

// ===== Generate HTML Fragments =====

function buildAboutHtml(about) {
    return about.map(p => `<p>${p}</p>`).join('\n                ');
}

function buildSkillsHtml(skills) {
    return skills.map(skill => `
                <div class="skill-card">
                    <div class="skill-icon">
                        ${getSkillIcon(skill.icon)}
                    </div>
                    <h3>${skill.category}</h3>
                    <ul class="skill-list">
                        ${skill.items.map(item => `<li>${item}</li>`).join('\n                        ')}
                    </ul>
                </div>`).join('');
}

function buildProjectImageHtml(project) {
    if (!project.images || project.images.length === 0) {
        return `<div class="project-img-placeholder">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="56" height="56">
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                            </svg>
                            <span>截圖即將上架</span>
                        </div>`;
    }

    // Portrait images: display side by side
    if (project.imageLayout === 'duo-portrait') {
        return `<div class="project-image-duo">
                            ${project.images.map((img, i) => `<img src="images/${img}" alt="${project.name} 截圖 ${i + 1}">`).join('\n                            ')}
                        </div>`;
    }

    // Default: carousel
    return `<div class="carousel" data-carousel>
                            <div class="carousel-slides">
                                ${project.images.map((img, i) => `<img src="images/${img}" alt="${project.name} 截圖 ${i + 1}" class="carousel-slide${i === 0 ? ' active' : ''}">`).join('\n                                ')}
                            </div>
                            <button class="carousel-btn carousel-btn-prev" aria-label="上一張">&#8249;</button>
                            <button class="carousel-btn carousel-btn-next" aria-label="下一張">&#8250;</button>
                            <div class="carousel-dots"></div>
                        </div>`;
}

function buildProjectsHtml(projects) {
    return projects.map(project => {
        const imageClass = project.imageRatio === 'wide'
            ? 'project-image project-image--wide'
            : 'project-image';

        return `
                <div class="pj-slide">
                    <article class="project-card">
                        <div class="${imageClass}">
                            ${buildProjectImageHtml(project)}
                        </div>
                        <div class="project-content">
                            <div class="project-header">
                                <div class="project-title-group">
                                    <h3>${project.name}</h3>
                                    <p class="project-subtitle">${project.subtitle}</p>
                                </div>
                            </div>
                            <p class="project-description">${project.description}</p>
                            <div class="project-features">
                                <h4>主要功能</h4>
                                <ul>
                                    ${project.features.map(f => `<li>${f}</li>`).join('\n                                    ')}
                                </ul>
                            </div>
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </article>
                </div>`;
    }).join('');
}

function buildExperiencesHtml(experiences) {
    return experiences.map(exp => `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <h3>${exp.title}</h3>
                            <span class="timeline-company">${exp.company}</span>
                        </div>
                        <span class="timeline-date">${exp.period}</span>
                        <ul class="timeline-details">
                            ${exp.details.map(d => `<li>${d}</li>`).join('\n                            ')}
                        </ul>
                    </div>
                </div>`).join('');
}

function buildArchitectureHtml(architecture) {
    if (!architecture) return '';

    // Separate layers by type
    const dbLayers = architecture.layers.filter(l => l.type === 'database');
    const backendLayers = architecture.layers.filter(l => l.type === 'backend');
    const frontendLayers = architecture.layers.filter(l => l.type === 'frontend');

    function renderNode(layer) {
        const icon = layer.type === 'frontend'
            ? getArchFrontendIcon(layer.name)
            : getArchIcon(layer.type);
        return `
                            <div class="arch-node arch-${layer.type}">
                                <div class="arch-icon">
                                    ${icon}
                                </div>
                                <div class="arch-label">${layer.name}</div>
                                <div class="arch-sublabel">${layer.sublabel}</div>
                            </div>`;
    }

    let html = `
            <!-- System Architecture -->
            <div class="architecture-section">
                <h3>${architecture.title}</h3>
                <p>${architecture.description}</p>

                <div class="arch-visual">`;

    // Database layer
    if (dbLayers.length) {
        html += `
                    <!-- Database Layer -->
                    <div class="arch-layer">${dbLayers.map(renderNode).join('')}
                    </div>

                    <!-- Connection Line -->
                    <div class="arch-connector">
                        <div class="arch-line"></div>
                    </div>`;
    }

    // Backend layer
    if (backendLayers.length) {
        html += `

                    <!-- Backend Layer -->
                    <div class="arch-layer">${backendLayers.map(renderNode).join('')}
                    </div>`;
    }

    // Connection to frontend
    if (frontendLayers.length) {
        html += `

                    <!-- Connection Line with Split -->
                    <div class="arch-connector-split">
                        <div class="arch-line-left"></div>
                        <div class="arch-line-right"></div>
                    </div>

                    <!-- Frontend Layer -->
                    <div class="arch-layer arch-layer-split">${frontendLayers.map(renderNode).join('')}
                    </div>`;
    }

    html += `
                </div>
            </div>`;

    return html;
}

// ===== Main Build =====

const templatePath = path.join(__dirname, 'template.html');
const outputPath = path.join(__dirname, 'index.html');

let html = fs.readFileSync(templatePath, 'utf-8');

// Simple placeholders
const replacements = {
    '{{name}}': CONFIG.name,
    '{{title}}': CONFIG.title,
    '{{description}}': CONFIG.description,
    '{{github}}': CONFIG.github,
    '{{email}}': CONFIG.email,
    '{{location}}': CONFIG.location,
    '{{meta_description}}': `${CONFIG.name} - ${CONFIG.title}`,
    '{{meta_title}}': `${CONFIG.name} | ${CONFIG.title.split(' | ')[0]}`,
    '{{footer_year}}': CONFIG.footer.year,
    '{{footer_name}}': CONFIG.footer.name,
    // Complex HTML blocks
    '{{about_html}}': buildAboutHtml(CONFIG.about),
    '{{skills_html}}': buildSkillsHtml(CONFIG.skills),
    '{{projects_html}}': buildProjectsHtml(CONFIG.projects),
    '{{experiences_html}}': buildExperiencesHtml(CONFIG.experiences),
    '{{architecture_html}}': buildArchitectureHtml(CONFIG.architecture),
};

for (const [placeholder, value] of Object.entries(replacements)) {
    html = html.split(placeholder).join(value);
}

fs.writeFileSync(outputPath, html, 'utf-8');
console.log('Built index.html successfully.');
