import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { helpCategories, letterWhiteBgBlue } from '../config';
import Footer from '../common/Footer';

const homeURL = process.env.REACT_APP_HOME_URL;

export const HelpLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCategories, setFilteredCategories] = useState(helpCategories);
    const [isSearchActive, setIsSearchActive] = useState(false);

    // Est-ce qu'on est sur la racine de /help ?
    const isOnHelpHome = location.pathname === '/' || location.pathname === '/help';


    const handleChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        const filteredCategories = helpCategories.filter((cat) =>
            cat.title.toLowerCase().includes(value.toLowerCase()) ||
            cat.description.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredCategories(filteredCategories);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Implémentation de la recherche - rediriger vers une page de résultats
            navigate(`/help/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
        if (isSearchActive) {
            setSearchQuery('');
            setFilteredCategories(helpCategories);
        } else {
            setSearchQuery('');
        }
    };

    return (
        <div className='help-layout'>
            <header className="help-header">
                <div className="container">
                    <div className="header-content">
                        <div
                            className="logo"
                            title='AdsCity'
                            onClick={() => window.location.href = homeURL}
                        >
                            <img src={letterWhiteBgBlue} alt="logo" />
                            <h1>Centre d'aide</h1>
                        </div>

                        <div className={`search-container ${isSearchActive ? 'active' : ''}`}>
                            {isSearchActive ? (
                                <form onSubmit={handleSearch}>
                                    <input
                                        type="text"
                                        placeholder="Rechercher dans l'aide..."
                                        value={searchQuery}
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                    <button type="button" className="close-search" onClick={toggleSearch}>
                                        <X size={20} />
                                    </button>
                                </form>
                            ) : (
                                <button className="search-icon" onClick={toggleSearch}>
                                    <Search size={20} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <main className="help-main">
                {/* Hero + catégories visibles uniquement à /help */}
                {isOnHelpHome && (
                    <div className="container">
                        <section className="help-hero">
                            <h1>Comment pouvons-nous vous aider?</h1>
                            <p>Explorez notre centre d'aide pour trouver des réponses à vos questions.</p>
                        </section>

                        <section className="help-categories">
                            {filteredCategories.map((cat, index) => (
                                <Link to={`/${cat.link}`} key={index} className="help-card">
                                    <div className="icon">{cat.icon}</div>
                                    <div className="content">
                                        <h3>{cat.title}</h3>
                                        <p>{cat.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </section>
                    </div>
                )}

                <div className="container">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
}