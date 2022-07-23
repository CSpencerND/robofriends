import React from 'react'

const SearchBox = ({ searchChange }) => {
    return (
        <form className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </form>
    )
}

export default SearchBox
