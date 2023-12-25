const root = ReactDOM.createRoot(document.querySelector('#root'));

// const content = (
//     <div>
//         <h1>Today : {(new Date()).toDateString()}</h1>
//     </div>
// )

const numb = 0

const SumShow = () => {
    return (
        <h1 class="sumNum">Sum = {numb}</h1>
    )
}

const BtnAddCount = () => {
    return (
        <button class="btnAdd">AddCount</button>
    )
}

const Counter = () => {
    return (
        <div class="counter">
            <button>+</button>
            <h2>{numb}</h2>
            <button>-</button>
            <button>C</button>
        </div>
    )
}

const App = () => {
    return (
        <div class="body">
            {/* <h1>Today : {(new Date()).toDateString()}</h1> */}
            <SumShow/>
            <BtnAddCount/>
            <Counter/>
        </div>
    )
}

root.render(
    <App/>
)