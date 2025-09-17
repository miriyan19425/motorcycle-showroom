function TestRidePreview({testRideInput}){
    return (
        <div className="preview">
            {
                (
                    testRideInput.color === 'Color' &&
                    testRideInput.model === 'Model'
                ) || 
                <ul id="preview-list">
                
                </ul>
            } 
        </div>
    );
}

export default TestRidePreview;
