// ==========================================================================
// Web Component: Policy Card (<policy-card>)
// ==========================================================================
class PolicyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || '정책 이름';
        const category = this.getAttribute('category') || '기타';
        const description = this.getAttribute('description') || '정책에 대한 설명이 제공되지 않았습니다.';
        const target = this.getAttribute('target') || '대상자 정보 없음';
        const date = this.getAttribute('date') || '상시접수';
        const link = this.getAttribute('link') || 'https://www.bokjiro.go.kr';
        
        // 카테고리별 색상 매핑
        const categoryColors = {
            'youth': 'var(--youth-color)',
            'marriage': 'var(--marriage-color)',
            'family': 'var(--family-color)',
            'elderly': 'var(--elderly-color)',
            'housing': 'var(--housing-color)',
            'medical': 'var(--medical-color)',
            'job': 'var(--job-color)',
            'all': 'var(--primary-color)'
        };

        const categoryLabels = {
            'youth': '청년',
            'marriage': '신혼부부',
            'family': '가족/여성',
            'elderly': '노인',
            'housing': '주거자금',
            'medical': '의료/건강',
            'job': '일자리/창업',
            'all': '전체'
        };

        const badgeColor = categoryColors[category] || 'var(--primary-color)';
        const badgeLabel = categoryLabels[category] || category;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    --card-bg: var(--surface-color, #ffffff);
                    --card-text: var(--text-color, #212529);
                    --card-muted: var(--text-muted, #6c757d);
                    --card-border: var(--border-color, #dee2e6);
                    --card-shadow: var(--shadow-sm, 0 .125rem .25rem rgba(0,0,0,.075));
                    --card-shadow-hover: var(--shadow-md, 0 .5rem 1rem rgba(0,0,0,.15));
                }
                
                .card {
                    background-color: var(--card-bg);
                    color: var(--card-text);
                    border: 1px solid var(--card-border);
                    border-radius: 12px;
                    padding: 1.5rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    box-shadow: var(--card-shadow);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--card-shadow-hover);
                }

                .badge {
                    display: inline-block;
                    background-color: ${badgeColor};
                    color: white;
                    padding: 0.3rem 0.8rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    align-self: flex-start;
                }

                .title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                }

                .description {
                    font-size: 0.95rem;
                    color: var(--card-muted);
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .meta {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    padding-top: 1rem;
                    margin-bottom: 1.2rem;
                    border-top: 1px solid var(--card-border);
                }

                .meta-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                }

                .meta-label {
                    font-weight: 600;
                    color: var(--card-text);
                    min-width: 50px;
                }

                .meta-value {
                    color: var(--card-muted);
                }
                
                .action-btn {
                    display: block;
                    width: 100%;
                    padding: 0.7rem;
                    background-color: var(--card-bg);
                    border: 1px solid ${badgeColor};
                    color: ${badgeColor};
                    text-align: center;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                }

                .action-btn:hover {
                    background-color: ${badgeColor};
                    color: white;
                }
            </style>
            
            <div class="card">
                <span class="badge">${badgeLabel}</span>
                <h3 class="title">${title}</h3>
                <p class="description">${description}</p>
                <div class="meta">
                    <div class="meta-item">
                        <span class="meta-label">지원대상</span>
                        <span class="meta-value">${target}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">신청기간</span>
                        <span class="meta-value">${date}</span>
                    </div>
                </div>
                <a href="${link}" class="action-btn" target="_blank" rel="noopener noreferrer">공식 사이트에서 확인하기</a>
            </div>
        `;
    }
}
customElements.define('policy-card', PolicyCard);

// ==========================================================================
// Mock Data (Policy List with Real Links)
// ==========================================================================
const mockPolicies = [
    {
        id: 1,
        title: "청년 월세 특별지원",
        category: "youth",
        description: "경제적 어려움을 겪고 있는 청년층의 주거비 부담 경감을 위해 청년월세를 한시적으로 특별지원합니다.",
        target: "만 19세~34세 독립거주 무주택 청년",
        date: "2026.02.26 ~ 2026.08.21",
        link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveWlfareInfoDetl.do?wlfareInfoId=WLF00004661"
    },
    {
        id: 2,
        title: "신혼부부 전세자금 대출",
        category: "marriage",
        description: "신혼부부의 주거 안정을 위해 전세자금을 저금리로 대출해 드립니다.",
        target: "혼인기간 7년 이내 신혼부부 또는 결혼예정자",
        date: "상시접수",
        link: "https://nhuf.molit.go.kr/FP/FP005/FP0050201.jsp"
    },
    {
        id: 3,
        title: "노인 일자리 및 사회활동 지원",
        category: "elderly",
        description: "어르신들이 활기차고 건강한 노후생활을 영위할 수 있도록 다양한 일자리와 사회활동을 지원합니다.",
        target: "만 65세 이상 기초연금수급자 등",
        date: "2026.11.28 ~ 2026.12.29",
        link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveWlfareInfoDetl.do?wlfareInfoId=WLF00000021"
    },
    {
        id: 4,
        title: "한부모가족 아동양육비 지원",
        category: "family",
        description: "저소득 한부모가족의 아동양육비 등을 지원하여 아동의 건강한 성장과 가정의 생활 안정을 돕습니다.",
        target: "기준중위소득 60% 이하 한부모가족",
        date: "상시접수",
        link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveWlfareInfoDetl.do?wlfareInfoId=WLF00000101"
    },
    {
        id: 5,
        title: "버팀목 전세자금 대출",
        category: "housing",
        description: "근로자와 서민의 주거 안정을 위한 전세자금을 지원합니다.",
        target: "부부합산 연소득 5천만원 이하, 무주택 세대주",
        date: "상시접수",
        link: "https://nhuf.molit.go.kr/FP/FP005/FP0050201.jsp"
    },
    {
        id: 6,
        title: "중증질환자 의료비 지원",
        category: "medical",
        description: "암, 심장, 뇌혈관, 희귀난치성 질환 등 중증질환자의 의료비 부담을 줄여드립니다.",
        target: "건강보험 가입자 중 산정특례 대상자",
        date: "상시접수",
        link: "https://www.nhis.or.kr/nhis/index.do"
    },
    {
        id: 7,
        title: "국민취업지원제도",
        category: "job",
        description: "취업을 희망하는 분들에게 취업지원서비스를 종합적으로 제공하고, 저소득 구직자에게는 최소한의 소득도 지원합니다.",
        target: "15~69세 구직자 (소득 및 재산 요건 충족자)",
        date: "상시접수",
        link: "https://www.kua.go.kr"
    },
    {
        id: 8,
        title: "청년내일채움공제",
        category: "youth",
        description: "중소기업에 정규직으로 취업한 청년들의 자산형성을 지원하여 장기근속을 유도합니다.",
        target: "만 15세 이상 34세 이하 중소기업 정규직 신규 취업자",
        date: "예산 소진 시까지",
        link: "https://www.work.go.kr/youngtomorrow/index.do"
    }
];

// ==========================================================================
// Application Logic
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const icon = themeToggleBtn.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // 2. DOM Elements for Rendering
    const policyGrid = document.getElementById('policyGrid');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');
    const filterChips = document.querySelectorAll('.filter-chip');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // 3. Render Function
    function renderPolicies(policies) {
        policyGrid.innerHTML = '';
        resultCount.textContent = policies.length;

        if (policies.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            policies.forEach(policy => {
                const card = document.createElement('policy-card');
                card.setAttribute('title', policy.title);
                card.setAttribute('category', policy.category);
                card.setAttribute('description', policy.description);
                card.setAttribute('target', policy.target);
                card.setAttribute('date', policy.date);
                card.setAttribute('link', policy.link);
                policyGrid.appendChild(card);
            });
        }
    }

    // 4. Filter and Search Logic
    let currentCategory = 'all';
    let currentSearchTerm = '';

    function applyFilters() {
        const filtered = mockPolicies.filter(policy => {
            const matchesCategory = currentCategory === 'all' || policy.category === currentCategory;
            const matchesSearch = policy.title.toLowerCase().includes(currentSearchTerm) || 
                                  policy.description.toLowerCase().includes(currentSearchTerm) ||
                                  policy.target.toLowerCase().includes(currentSearchTerm);
            return matchesCategory && matchesSearch;
        });
        renderPolicies(filtered);
    }

    filterChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            filterChips.forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            applyFilters();
        });
    });

    searchBtn.addEventListener('click', () => {
        currentSearchTerm = searchInput.value.toLowerCase().trim();
        applyFilters();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearchTerm = searchInput.value.toLowerCase().trim();
            applyFilters();
        }
    });

    renderPolicies(mockPolicies);
});
