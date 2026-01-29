function Header({ searchQuery, setSearchQuery }) {
    return (
        <header className="header">
            <input
                type="text"
                placeholder="Search groceries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
        </header>
    );
}

export default Header;