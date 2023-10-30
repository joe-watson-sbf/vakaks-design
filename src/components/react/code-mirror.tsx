import React from 'react';

const CodeMirror = () => {
  const [code, setCode] = React.useState<any>('<!-- Enter your HTML or CSS code here -->');
  const previewFrameRef = React.useRef<HTMLIFrameElement | any>();

  const handleCodeChange = (event: any) => {
    const newCode = event.target.value;
    setCode(newCode);
    updatePreviewCode(newCode);
  };

  const updatePreviewCode = (newCode: any) => {
    const iframe = previewFrameRef.current;
    if (iframe) {
      const doc = iframe.contentDocument;
      console.log(doc)
      if (doc) {
        doc.open();
        doc.write(newCode);
        doc.close();
      }
    }
  };

  return (
    <div className="code-editor-container text-primary-yellow">
      <div className="code-editor">
        <h3>Code Editor</h3>
        <textarea
          value={code}
          onChange={handleCodeChange}
        />
      </div>
      <div className="code-preview">
        <h3 className='text-primary-blue'>Code Preview</h3>
        <iframe
          title="Code Preview"
          className='text-primary-blue'
          ref={previewFrameRef as any}
        />
      </div>
    </div>
  );
}

export default CodeMirror




