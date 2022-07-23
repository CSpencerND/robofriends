import React, { Component } from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"
import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: "",
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { robots, searchField } = this.state

        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return !robots.length ? (
            <h1>Loading</h1>
        ) : (
            <main className="tc">
                <h1 className="f1 ">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </main>
        )
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(res)
            })
            .then((users) => this.setState({ robots: users }))
            .catch((e) => alert("Something went wrong", e))

        // async componentDidMount() {
        //     const res =
        //         (await fetch('https://jsonplaceholder.typicode.com/users')) ||
        //         fetch('https://jsonplaceholder.cypress.io/users')
        //     if (res.ok) {
        //         const json = await res.json()
        //         this.setState({ robots: json })
        //     }
    }
}

export default App
