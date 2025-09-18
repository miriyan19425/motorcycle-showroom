function TestRidePreview({testRideInput}){
    return (
        <div className="preview">
            {
                (
                    testRideInput.color === 'Color' &&
                    testRideInput.model === 'Model' &&
                    testRideInput.dateTime === "" &&
                    testRideInput.name === ""
                ) || 
                <ul id="preview-list">
                
                </ul>
            } 
        </div>
    );
}

export default TestRidePreview;
