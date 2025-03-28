
function MyComponent(){
    return (
        // also at a time only one component can be returned so 
        // <h1>This is created by me</h1>

        // but the issue can be resolved as 

        <>
        <h1>This is multiple elements returned </h1>
        <p>This is para</p>
        <h3>great</h3>
        </>
    )
}

export default MyComponent