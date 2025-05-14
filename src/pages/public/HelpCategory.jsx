import { Link, useParams } from 'react-router-dom';
import { helpArticles } from '../../config';
import '../../styles/HelpCategory.scss';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const HelpSidebar = ({ articles, currentSlug, onSelect, className = '' }) => {
    const isActive = (slug) => currentSlug === slug;

    return (
        <aside className={`help-sidebar ${className}`}>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <Link
                            to={`/${article.category.slug}/${article.slug}`}
                            className={isActive(article.slug) ? 'active' : ''}
                            onClick={() => onSelect && onSelect(article.slug)}
                        >
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

const HelpContent = ({ article }) => (
    <div className="help-content">
        <h1>{article?.title}</h1>
        <div className="article-body">{article?.content}</div>
    </div>
);

export default function HelpCategory() {
    const { category, slug } = useParams();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const filteredArticles = helpArticles.filter(a => a.category.slug === category);
    const selectedArticle = filteredArticles.find(a => a.slug === slug) || filteredArticles[0];

    const handleSidebarToggle = () => setSidebarOpen(!isSidebarOpen);
    const handleArticleSelect = () => setSidebarOpen(false);


    return (
        <div className="help-category-layout">
            <div className="mobile-header">
                <button className="sidebar-toggle" onClick={handleSidebarToggle}>
                    <Menu size={20} />
                    <span>Articles</span>
                </button>
            </div>

            <div className={`help-category-container ${isSidebarOpen ? 'show-sidebar' : ''}`}>
                <HelpSidebar
                    articles={filteredArticles}
                    currentSlug={slug}
                    onSelect={handleArticleSelect}
                    className={isSidebarOpen ? 'mobile-visible' : ''}
                />

                <HelpContent article={selectedArticle} />
            </div>
        </div>
    );
}
