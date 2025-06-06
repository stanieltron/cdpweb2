/* ========================================
   CONSTANTS & CONFIGURATION
   ======================================== */

const ETH_PRICE = 3000; // USD

// Global variables for pagination
let currentSortBy = 'new';
let displayedCount = 6;
const projectsPerPage = 6;

/* ========================================
   PROJECT DATA
   ======================================== */

// Project data with randomized token prices and optimized funding ratios
const projectsData = [
    {
        name: "Agentone",
        symbol: "AGT",
        website: "agentone.ai",
        totalFunds: 567, // ETH
        tokenPriceUSD: 0.089, // USD per token
        totalAllocation: 100000000, // 100 million tokens
        logo: "logos/agentone.png",
        fundings: [45, 33, 47, 75, 120, 125, 122],
        firstFunding: new Date('2024-03-15'),
        description: "Agentone is revolutionizing AI-powered automation with intelligent agents that learn and adapt to business workflows. Our platform enables seamless integration of AI assistants across enterprise systems, reducing operational costs by up to 60% while improving productivity and decision-making capabilities."
    },
    {
        name: "VentureDao",
        symbol: "VNT", 
        website: "venturedao.org",
        totalFunds: 892, // ETH
        tokenPriceUSD: 0.034, // USD per token
        totalAllocation: 1000000000, // 1 billion tokens
        logo: "logos/venturedao.png",
        fundings: [67, 78, 100, 133, 134, 175, 205],
        firstFunding: new Date('2024-12-01'),
        description: "VentureDao is a decentralized investment platform that democratizes access to early-stage startup funding. Through community-driven due diligence and smart contract automation, we're creating a transparent ecosystem where retail investors can participate in venture capital opportunities previously reserved for institutions."
    },
    {
        name: "YieldPlus",
        symbol: "YLD",
        website: "yieldplus.finance", 
        totalFunds: 423, // ETH
        tokenPriceUSD: 3.45, // USD per token
        totalAllocation: 10000000, // 10 million tokens
        logo: "logos/yieldplus.png",
        fundings: [38, 51, 67, 78, 78, 66, 45],
        firstFunding: new Date('2024-08-22'),
        description: "YieldPlus optimizes DeFi yield farming through advanced algorithmic strategies and risk management protocols. Our platform automatically compounds rewards across multiple protocols, providing users with maximized returns while minimizing impermanent loss and smart contract risks."
    },
    {
        name: "SwapX",
        symbol: "SWX",
        website: "swapx.exchange",
        totalFunds: 634, // ETH
        tokenPriceUSD: 0.012, // USD per token
        totalAllocation: 100000000, // 100 million tokens
        logo: "logos/swapx.png",
        fundings: [52, 73, 73, 91, 123, 155, 67],
        firstFunding: new Date('2024-01-10'),
        description: "SwapX is building the next generation decentralized exchange with zero slippage and instant settlements. Using innovative concentrated liquidity pools and cross-chain bridge technology, we're solving the liquidity fragmentation problem across multiple blockchain networks."
    },
    {
        name: "CryptoPulse",
        symbol: "CRP", 
        website: "cryptopulse.tech",
        totalFunds: 345, // ETH
        tokenPriceUSD: 0.067, // USD per token
        totalAllocation: 1000000000, // 1 billion tokens
        logo: null,
        fundings: [32, 36, 37, 43, 47, 72, 78],
        firstFunding: new Date('2024-12-05'),
        description: "CryptoPulse provides real-time market intelligence and automated trading signals for cryptocurrency investors. Our AI-driven analytics platform processes millions of data points to identify profitable trading opportunities, helping users make informed investment decisions in volatile markets."
    },
    {
        name: "TokenWave",
        symbol: "TWV",
        website: "tokenwave.io", 
        totalFunds: 456, // ETH
        tokenPriceUSD: 1.89, // USD per token
        totalAllocation: 10000000, // 10 million tokens
        logo: null,
        fundings: [25, 30, 40, 70, 80, 80, 131],
        firstFunding: new Date('2024-08-18'),
        description: "TokenWave is pioneering the tokenization of real-world assets through blockchain technology. Our platform enables fractional ownership of real estate, commodities, and intellectual property, making traditionally illiquid investments accessible to global retail investors."
    },
    {
        name: "BlockSphere",
        symbol: "BSP",
        website: "blocksphere.network",
        totalFunds: 789, // ETH
        tokenPriceUSD: 0.078, // USD per token
        totalAllocation: 100000000, // 100 million tokens
        logo: null,
        fundings: [67, 67, 101, 123, 137, 139, 155],
        firstFunding: new Date('2024-01-05'),
        description: "BlockSphere is developing a high-performance blockchain infrastructure optimized for enterprise applications. With sub-second transaction finality and environmentally sustainable consensus mechanisms, we're enabling large-scale adoption of blockchain technology in traditional industries."
    },
    {
        name: "DigiVault",
        symbol: "DVT",
        website: "digivault.secure",
        totalFunds: 298, // ETH
        tokenPriceUSD: 0.023, // USD per token
        totalAllocation: 1000000000, // 1 billion tokens
        logo: null,
        fundings: [28, 47, 50, 60, 60, 53],
        firstFunding: new Date('2024-06-18'),
        description: "DigiVault provides military-grade digital asset custody solutions for institutions and high-net-worth individuals. Our multi-signature cold storage technology combined with insurance coverage ensures maximum security for cryptocurrency holdings worth billions of dollars."
    },
    {
        name: "ChainVenture", 
        symbol: "CVT",
        website: "chainventure.capital",
        totalFunds: 567, // ETH
        tokenPriceUSD: 4.23, // USD per token
        totalAllocation: 10000000, // 10 million tokens
        logo: null,
        fundings: [55, 60, 80, 100, 130, 142],
        firstFunding: new Date('2024-02-28'),
        description: "ChainVenture is a blockchain-native venture capital fund that invests in early-stage Web3 startups. Through tokenized fund shares and transparent governance, we're creating a new model for venture capital that aligns investor interests with portfolio company success."
    },
    {
        name: "NexusCoin",
        symbol: "NXS",
        website: "nexuscoin.network",
        totalFunds: 234, // ETH
        tokenPriceUSD: 0.156, // USD per token
        totalAllocation: 100000000, // 100 million tokens
        logo: null,
        fundings: [18, 27, 40, 40, 50, 59],
        firstFunding: new Date('2024-11-05'),
        description: "NexusCoin is building a unified payment network that connects traditional banking with cryptocurrency ecosystems. Our solution enables instant, low-cost transfers between fiat and crypto currencies, bridging the gap between old and new financial systems."
    },
    {
        name: "CryptoSphere",
        symbol: "CSP", 
        website: "cryptosphere.global",
        totalFunds: 412, // ETH
        tokenPriceUSD: 0.045, // USD per token
        totalAllocation: 1000000000, // 1 billion tokens
        logo: null,
        fundings: [42, 46, 60, 77, 100, 87],
        firstFunding: new Date('2024-04-12'),
        description: "CryptoSphere is developing a comprehensive metaverse platform where users can create, trade, and monetize virtual experiences. With integrated NFT marketplaces and virtual real estate, we're building the foundation for the next generation of digital social interaction."
    },
    {
        name: "TokenForge",
        symbol: "TFG",
        website: "tokenforge.build",
        totalFunds: 198, // ETH
        tokenPriceUSD: 0.234, // USD per token
        totalAllocation: 100000000, // 100 million tokens
        logo: null,
        fundings: [35, 40, 50, 50, 23],
        firstFunding: new Date('2024-09-30'),
        description: "TokenForge simplifies token creation and management for businesses looking to integrate blockchain technology. Our no-code platform enables companies to launch custom tokens, implement loyalty programs, and create tokenized business models without technical expertise."
    }
];

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Generate a chart SVG for main page (convert individual to cumulative)
function generateChart(individualFundings, width = 200, height = 120) {
    if (!individualFundings || individualFundings.length === 0) return '';
    
    // Convert individual fundings to cumulative for main page charts
    const cumulativeFundings = [];
    let sum = 0;
    for (let i = 0; i < individualFundings.length; i++) {
        sum += individualFundings[i];
        cumulativeFundings.push(sum);
    }
    
    const maxValue = Math.max(...cumulativeFundings);
    const minValue = Math.min(...cumulativeFundings);
    const valueRange = maxValue - minValue;
    
    const points = [];
    const pathPoints = [];
    
    for (let i = 0; i < cumulativeFundings.length; i++) {
        const x = (i / (cumulativeFundings.length - 1)) * width;
        const normalizedValue = valueRange > 0 ? (cumulativeFundings[i] - minValue) / valueRange : 0.5;
        const y = height - (normalizedValue * 0.6 + 0.2) * height;
        
        points.push(`${x},${y}`);
        pathPoints.push(i === 0 ? `M${x},${y}` : `L${x},${y}`);
    }
    
    const pathData = pathPoints.join(' ') + ` L${width},${height} L0,${height} Z`;
    
    return `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
            <defs>
                <linearGradient id="chartGradient${Date.now()}" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#e5e7eb;stop-opacity:0.8"/>
                    <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:0.2"/>
                </linearGradient>
            </defs>
            <path d="${pathData}" 
                  fill="url(#chartGradient${Date.now()})" 
                  stroke="none"/>
            <polyline points="${points.join(' ')}" 
                      fill="none" 
                      stroke="#9ca3af" 
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"/>
        </svg>
    `;
}

// Generate funding per $1 worth of tokens chart for project detail page
function generateIndividualFundingChart(individualFundings, width = 800, height = 400, project) {
    if (!individualFundings || individualFundings.length === 0) return '';
    
    // Calculate funding per $1 worth of tokens for each funding round
    const totalTokenValueUSD = project.totalAllocation * project.tokenPriceUSD;
    const fundingPerDollarTokens = individualFundings.map(funding => {
        const fundingUSD = funding * ETH_PRICE;
        return fundingUSD / totalTokenValueUSD;
    });
    const maxValue = Math.max(...fundingPerDollarTokens);
    
    const chartWidth = width - 100;
    const chartHeight = height - 80;
    const barWidth = 8;
    
    // Calculate time-based positions
    const firstFundingDate = project.firstFunding.getTime();
    const currentDate = Date.now();
    const totalTimeSpan = currentDate - firstFundingDate;
    const daysBetweenRounds = totalTimeSpan / (individualFundings.length - 1);
    
    let bars = '';
    let labels = '';
    let gridLines = '';
    
    // Create horizontal grid lines
    const gridSteps = 5;
    for (let i = 0; i <= gridSteps; i++) {
        const y = 50 + (i * (chartHeight / gridSteps));
        const value = maxValue * (1 - i / gridSteps);
        
        gridLines += `
            <line x1="50" y1="${y}" x2="${width - 50}" y2="${y}" 
                  stroke="#f1f5f9" stroke-width="1" opacity="0.8"/>
            <text x="35" y="${y + 4}" text-anchor="end" font-size="12" 
                  fill="#64748b" font-weight="500">
                ${value.toFixed(3)}
            </text>
        `;
    }
    
    // Create gradient definitions
    const gradientId = `barGradient${Date.now()}`;
    const gradient = `
        <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#e5e7eb;stop-opacity:0.9"/>
                <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:0.4"/>
            </linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.1"/>
            </filter>
        </defs>
    `;
    
    for (let i = 0; i < fundingPerDollarTokens.length; i++) {
        const barHeight = (fundingPerDollarTokens[i] / maxValue) * chartHeight;
        
        // Calculate time-based x position
        const fundingDate = new Date(firstFundingDate + (i * daysBetweenRounds));
        const timeProgress = (fundingDate.getTime() - firstFundingDate) / totalTimeSpan;
        const x = 50 + (timeProgress * chartWidth) - (barWidth / 2);
        
        const y = height - 30 - barHeight;
        
        bars += `
            <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" 
                  fill="url(#${gradientId})" rx="2" ry="2" 
                  filter="url(#shadow)" opacity="0.9"
                  stroke="#9ca3af" stroke-width="0.5"
                  onmouseover="this.style.opacity='1'; this.style.transform='scaleY(1.05)'; this.style.transformOrigin='bottom';"
                  onmouseout="this.style.opacity='0.9'; this.style.transform='scaleY(1)';">
                <animate attributeName="height" from="0" to="${barHeight}" dur="0.8s" begin="${i * 0.1}s"/>
                <animate attributeName="y" from="${height - 30}" to="${y}" dur="0.8s" begin="${i * 0.1}s"/>
            </rect>
            <text x="${x + barWidth/2}" y="${y - 8}" 
                  text-anchor="middle" font-size="11" fill="#6b7280" font-weight="500"
                  opacity="0">
                ${fundingPerDollarTokens[i].toFixed(3)}
                <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="${i * 0.1 + 0.8}s"/>
            </text>
        `;
        
        // Create time-based x-axis labels
        const labelDate = fundingDate.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
        labels += `
            <text x="${x + barWidth/2}" y="${height - 8}" 
                  text-anchor="middle" font-size="11" fill="#64748b" font-weight="500">
                ${labelDate}
            </text>
        `;
    }
    
    return `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="background: transparent;">
            ${gradient}
            ${gridLines}
            <line x1="50" y1="50" x2="50" y2="${height - 30}" stroke="#e2e8f0" stroke-width="1"/>
            <line x1="50" y1="${height - 30}" x2="${width - 50}" y2="${height - 30}" stroke="#e2e8f0" stroke-width="1"/>
            ${bars}
            ${labels}
            <text x="25" y="45" font-size="12" fill="#6b7280" font-weight="500" text-anchor="middle">Funding per $1</text>
        </svg>
    `;
}

/* ========================================
   PROJECTS SECTION FUNCTIONALITY
   ======================================== */

function createProjectCard(project) {
    const totalFundsUSD = project.totalFunds * ETH_PRICE;
    
    return `
        <div class="project-card">
            <div class="project-left-content">
                <div class="project-header">
                    <div class="project-logo">
                        ${project.logo ? `<img src="${project.logo}" alt="${project.name}">` : ''}
                    </div>
                    <button class="project-arrow">→</button>
                </div>
                
                <div class="project-info">
                    <h3 class="project-name">${project.name} <span class="project-symbol">${project.symbol}</span></h3>
                    <p class="project-website">${project.website}</p>
                </div>
                
                <div class="project-stats">
                    <div class="total-funds-label">Total funds</div>
                    <div class="total-funds">$${formatNumber(totalFundsUSD)} <span class="eth-price">${project.totalFunds} ETH</span></div>
                </div>
            </div>
            
            <div class="project-chart">
                ${generateChart(project.fundings, 200, 120)}
            </div>
        </div>
    `;
}

function loadProjects(sortBy = 'new', reset = true) {
    if (reset) {
        displayedCount = projectsPerPage;
        currentSortBy = sortBy;
    }
    
    let sortedProjects = [...projectsData];
    
    switch(sortBy) {
        case 'new':
            sortedProjects.sort((a, b) => b.firstFunding - a.firstFunding);
            break;
        case 'revenue':
            sortedProjects.sort((a, b) => b.totalFunds - a.totalFunds);
            break;
        case 'all':
            sortedProjects.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    const projectsToShow = sortedProjects.slice(0, displayedCount);
    
    const grid = document.getElementById('projectsGrid');
    if (!grid) {
        console.error('Projects grid element not found!');
        return;
    }
    
    grid.innerHTML = projectsToShow.map((project) => createProjectCard(project)).join('');
    addProjectCardClickHandlers(projectsToShow);
    updateShowMoreButton(sortedProjects.length);
}

function addProjectCardClickHandlers(projects) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            showProjectDetail(projects[index]);
        });
    });
}

function updateShowMoreButton(totalProjects) {
    const showMoreBtn = document.querySelector('.show-more-btn');
    const showMoreContainer = document.querySelector('.show-more-container');
    
    if (showMoreContainer) {
        if (displayedCount >= totalProjects) {
            showMoreContainer.style.display = 'none';
        } else {
            showMoreContainer.style.display = 'flex';
            if (showMoreBtn) {
                const remaining = totalProjects - displayedCount;
                showMoreBtn.textContent = `Show More (${remaining} remaining)`;
            }
        }
    }
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(tab => tab.classList.remove('active'));
            btn.classList.add('active');
            
            const tabType = btn.dataset.tab;
            loadProjects(tabType, true);
        });
    });
}

function initShowMore() {
    const showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            displayedCount += projectsPerPage;
            loadProjects(currentSortBy, false);
        });
    }
}

/* ========================================
   FAQ SECTION FUNCTIONALITY
   ======================================== */

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqIndex = question.dataset.faq;
            const answer = document.querySelector(`[data-answer="${faqIndex}"]`);
            const toggle = question.querySelector('.faq-toggle');
            
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherIndex = otherQuestion.dataset.faq;
                    const otherAnswer = document.querySelector(`[data-answer="${otherIndex}"]`);
                    const otherToggle = otherQuestion.querySelector('.faq-toggle');
                    
                    otherAnswer.classList.remove('open');
                    otherToggle.classList.remove('open');
                }
            });
            
            answer.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    });
}

/* ========================================
   PROJECT DETAIL SUBPAGE FUNCTIONALITY
   ======================================== */

function showProjectDetail(project) {
    const mainElements = document.querySelectorAll('body > *:not(#projectDetailPage)');
    mainElements.forEach(element => {
        element.style.display = 'none';
    });
    
    const projectDetailPage = document.getElementById('projectDetailPage');
    projectDetailPage.style.display = 'block';
    
    populateProjectDetail(project);
    window.scrollTo(0, 0);
    
    sessionStorage.setItem('cdp-current-page', 'project-detail');
    sessionStorage.setItem('cdp-current-project', JSON.stringify(project));
    
    if (window.history && window.history.pushState) {
        window.history.pushState({page: 'project-detail', project: project}, `${project.name} - CDP`, `#project/${project.symbol.toLowerCase()}`);
    }
}

function hideProjectDetail() {
    const mainElements = document.querySelectorAll('body > *:not(#projectDetailPage)');
    mainElements.forEach(element => {
        element.style.display = '';
    });
    
    const projectDetailPage = document.getElementById('projectDetailPage');
    projectDetailPage.style.display = 'none';
    
    document.body.style.overflow = '';
    
    setTimeout(() => {
        const projectsSection = document.querySelector('.projects-section-wrapper');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
    
    sessionStorage.removeItem('cdp-current-page');
    sessionStorage.removeItem('cdp-current-project');
    
    if (window.history && window.history.pushState) {
        window.history.pushState({page: 'home'}, 'CDP - Cumulative Distribution Platform', window.location.pathname);
    }
}

function populateProjectDetail(project) {
    document.getElementById('projectDetailName').textContent = project.name;
    document.getElementById('projectDetailSymbol').textContent = project.symbol;
    document.getElementById('projectDetailWebsite').textContent = project.website;
    document.getElementById('projectDetailDescription').textContent = project.description;
    
    const logoElement = document.getElementById('projectDetailLogo');
    if (project.logo) {
        logoElement.src = project.logo;
        logoElement.style.display = 'block';
    } else {
        logoElement.style.display = 'none';
    }
    
    const totalFundsUSD = project.totalFunds * ETH_PRICE;
    const tokenPriceETH = project.tokenPriceUSD / ETH_PRICE;
    const totalTokenValueUSD = project.totalAllocation * project.tokenPriceUSD;
    const finalRatio = totalFundsUSD / totalTokenValueUSD;
    
    document.getElementById('projectTotalFunds').textContent = `$${formatNumber(totalFundsUSD)}`;
    document.getElementById('projectTotalFundsEth').textContent = `${project.totalFunds} ETH`;
    document.getElementById('projectTokenPrice').textContent = `$${project.tokenPriceUSD.toFixed(3)}`;
    document.getElementById('projectTokenPriceEth').textContent = `${tokenPriceETH.toFixed(6)} ETH`;
    document.getElementById('projectTotalRounds').textContent = project.fundings.length;
    document.getElementById('projectFirstFunding').textContent = project.firstFunding.toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric' 
    });
    
    // Update final ratio
    document.getElementById('projectFinalRatio').textContent = `${(finalRatio * 100).toFixed(1)}%`;
    
    const chartContainer = document.getElementById('projectFundingChart');
    chartContainer.innerHTML = generateIndividualFundingChart(project.fundings, 800, 400, project);
    
    generateFundingHistoryTable(project);
}

function generateFundingHistoryTable(project) {
    const tableBody = document.getElementById('fundingTableBody');
    const individualFundings = project.fundings;
    const totalTokenValueUSD = project.totalAllocation * project.tokenPriceUSD;
    
    let tableHTML = '';
    
    for (let i = 0; i < individualFundings.length; i++) {
        const fundingAmount = individualFundings[i];
        const fundingAmountUSD = fundingAmount * ETH_PRICE;
        const fundingPerDollarTokens = fundingAmountUSD / totalTokenValueUSD;
        
        const daysSinceFirst = (Date.now() - project.firstFunding.getTime()) / (1000 * 60 * 60 * 24);
        const daysBetweenRounds = daysSinceFirst / (project.fundings.length - 1);
        const roundDate = new Date(project.firstFunding.getTime() + (i * daysBetweenRounds * 24 * 60 * 60 * 1000));
        
        // Calculate funding percentage (funding amount / total token value)
        const fundingPercentage = (fundingAmountUSD / totalTokenValueUSD) * 100;
        
        tableHTML += `
            <div class="funding-row">
                <div class="funding-round">Round ${i + 1}</div>
                <div class="funding-amount">
                    $${formatNumber(fundingAmountUSD)}
                    <div class="funding-amount-sub">${fundingAmount.toFixed(0)} ETH</div>
                </div>
                <div class="funding-date">${roundDate.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric' 
                })}</div>
                <div class="funding-tokens">
                    ${fundingPerDollarTokens.toFixed(3)}
                    <div class="funding-amount-sub">funding/$1 tokens</div>
                </div>
                <div class="funding-growth">
                    ${fundingPercentage.toFixed(2)}%
                    <div class="funding-amount-sub">of token value</div>
                </div>
            </div>
        `;
    }
    
    tableBody.innerHTML = tableHTML;
}

function initProjectDetailNavigation() {
    const backBtn = document.querySelector('.back-to-projects-btn');
    if (backBtn) {
        backBtn.addEventListener('click', hideProjectDetail);
    }
    
    const cdpLogo = document.querySelector('#projectDetailPage .clickable-logo');
    if (cdpLogo) {
        cdpLogo.addEventListener('click', () => {
            hideProjectDetail();
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        });
    }
    
    const stakeBtn = document.querySelector('.stake-tokens-btn');
    const unstakeBtn = document.querySelector('.unstake-tokens-btn');
    const burnBtn = document.querySelector('.burn-tokens-btn');
    const buyBtn = document.querySelector('.buy-tokens-btn');
    
    if (stakeBtn) {
        stakeBtn.addEventListener('click', () => {
            alert('Stake tokens functionality coming soon!');
        });
    }
    
    if (unstakeBtn) {
        unstakeBtn.addEventListener('click', () => {
            alert('Unstake tokens functionality coming soon!');
        });
    }
    
    if (burnBtn) {
        burnBtn.addEventListener('click', () => {
            alert('Burn tokens functionality coming soon!');
        });
    }
    
    if (buyBtn) {
        buyBtn.addEventListener('click', () => {
            alert('Buy tokens functionality coming soon!');
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('projectDetailPage').style.display === 'block') {
            hideProjectDetail();
        }
    });
    
    window.addEventListener('popstate', (event) => {
        const urlHash = window.location.hash;
        
        if (urlHash.startsWith('#project/')) {
            const projectSymbol = urlHash.replace('#project/', '').toLowerCase();
            const project = projectsData.find(p => p.symbol.toLowerCase() === projectSymbol);
            
            if (project && document.getElementById('projectDetailPage').style.display !== 'block') {
                showProjectDetail(project);
            }
        } else if (document.getElementById('projectDetailPage').style.display === 'block') {
            hideProjectDetail();
        }
    });
    
    checkProjectDetailState();
}

function checkProjectDetailState() {
    const currentPage = sessionStorage.getItem('cdp-current-page');
    const currentProject = sessionStorage.getItem('cdp-current-project');
    const urlHash = window.location.hash;
    
    if (urlHash.startsWith('#project/')) {
        const projectSymbol = urlHash.replace('#project/', '').toLowerCase();
        const project = projectsData.find(p => p.symbol.toLowerCase() === projectSymbol);
        
        if (project) {
            showProjectDetail(project);
            return;
        }
    }
    
    if (currentPage === 'project-detail' && currentProject) {
        try {
            const project = JSON.parse(currentProject);
            showProjectDetail(project);
        } catch (e) {
            sessionStorage.removeItem('cdp-current-page');
            sessionStorage.removeItem('cdp-current-project');
        }
    }
}

/* ========================================
   LEARN MORE SUBPAGE FUNCTIONALITY
   ======================================== */

function initSubpageNavigation() {
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    const integrateProjectBtns = document.querySelectorAll('.integrate-my-project-btn-bottom');
    const cdpLogo = document.querySelector('#learnMorePage .clickable-logo');
    const learnMorePage = document.getElementById('learnMorePage');
    
    function showLearnMorePage() {
        const mainElements = document.querySelectorAll('body > *:not(#learnMorePage)');
        mainElements.forEach(element => {
            element.style.display = 'none';
        });
        
        learnMorePage.style.display = 'block';
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        
        sessionStorage.setItem('cdp-current-page', 'learn-more');
        
        if (window.history && window.history.pushState) {
            window.history.pushState({page: 'learn-more'}, 'Learn More - CDP', '#learn-more');
        }
    }
    
    function hideLearnMorePage() {
        const mainElements = document.querySelectorAll('body > *:not(#learnMorePage)');
        mainElements.forEach(element => {
            element.style.display = '';
        });
        
        learnMorePage.style.display = 'none';
        document.body.style.overflow = '';
        window.scrollTo(0, 0);
        
        sessionStorage.removeItem('cdp-current-page');
        
        if (window.history && window.history.pushState) {
            window.history.pushState({page: 'home'}, 'CDP - Cumulative Distribution Platform', window.location.pathname);
        }
    }
    
    function checkPageState() {
        const currentPage = sessionStorage.getItem('cdp-current-page');
        const urlHash = window.location.hash;
        
        if (currentPage === 'learn-more' || urlHash === '#learn-more') {
            showLearnMorePage();
        }
    }
    
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', showLearnMorePage);
    });
    
    integrateProjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            hideLearnMorePage();
            setTimeout(() => {
                const ctaSection = document.querySelector('.cta-section-wrapper');
                if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        });
    });
    
    if (cdpLogo) {
        cdpLogo.addEventListener('click', hideLearnMorePage);
    }
    
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.page === 'home') {
            hideLearnMorePage();
        } else if (window.location.hash === '#learn-more') {
            showLearnMorePage();
        } else if (!window.location.hash && learnMorePage.style.display === 'block') {
            hideLearnMorePage();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && learnMorePage.style.display === 'block') {
            hideLearnMorePage();
        }
    });
    
    checkPageState();
}

/* ========================================
   INITIALIZATION
   ======================================== */

function initDiscoverButton() {
    const discoverBtn = document.querySelector('.discover-btn');
    if (discoverBtn) {
        discoverBtn.addEventListener('click', function() {
            const projectsSection = document.querySelector('.projects-section-wrapper');
            if (projectsSection) {
                projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    
    loadProjects('new');
    initTabs(); 
    initShowMore();
    initFAQ();
    initSubpageNavigation();
    initDiscoverButton(); 
    initProjectDetailNavigation(); 
    
    console.log('All functions initialized');
});