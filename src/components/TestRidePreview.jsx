function TestRidePreview({testRideInput}){
    return (
        <div className="preview">
            {
                (
                    testRideInput.color === 'Color'
                ) || 
                <ul id="preview-list">
                
                </ul>
            } 
        </div>
    );
}

export default TestRidePreview;
