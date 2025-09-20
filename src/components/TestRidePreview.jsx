function TestRidePreview({testRideInput}){
    return (
        <div className="preview">
            {
                (
                    testRideInput.color === 'Color' &&
                    testRideInput.model === 'Model' &&
                    testRideInput.dateTime === "" &&
                    testRideInput.name === "" &&
                    testRideInput.email === ""
                ) || 
                <ul id="preview-list">
                    <li>
                        <article>
                        
                        </article>
                        <div>
                        
                        </div>
                    </li>
                </ul>
            } 
        </div>
    );
}

export default TestRidePreview;
