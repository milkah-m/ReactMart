function Header({ searchQuery, setSearchQuery }) {
    return (
        <header className="header">
            <h2>GroceryApp</h2>

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