import React, { useState, useCallback } from 'react';
import PdfMaker from './PdfMaker';

const docDefinition = {
  content: [
    'First paragraph',
    'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
  ]
};

const Challenge = () => {
  const [processing, setProsessing] = useState(false);

  const onClick = useCallback(async () => {
    setProsessing(true);
  }, []);

  const onCompleted = useCallback(() => {
    setProsessing(false);
  }, []);

  return (
    <div className="example">
      <h1>Example 4</h1>
      <button onClick={onClick} disabled={processing}>{processing ? 'Processing...' : 'Export PDF'}</button>
      {processing && <PdfMaker docDefinition={docDefinition} onCompleted={onCompleted} />}
    </div>
  )
}

export default Challenge;
