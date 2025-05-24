import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { FaPlay, FaCode } from 'react-icons/fa';
import { codeTemplates } from '../../utils/codeTemplates';

export default function PlaygroundEditor({ code, onChange, onRun, errorInfo }) {
  const [showTemplates, setShowTemplates] = useState(false);

  const editorOptions = {
    fontSize: 14,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    automaticLayout: true,
    lineNumbers: 'on',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    lineHeight: 1.6,
    padding: { top: 16 },
    folding: true,
    renderLineHighlight: 'all',
    tabSize: 2,
  };

  // Handle editor mounting
  const handleEditorDidMount = (editor, monaco) => {
    // Set theme to match GitHub Dark
    monaco.editor.defineTheme('github-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'FF7B72' },
        { token: 'string', foreground: 'A5D6FF' },
        { token: 'number', foreground: '79C0FF' },
        { token: 'type', foreground: 'FF7B72' },
      ],
      colors: {
        'editor.background': '#161b22',
        'editor.foreground': '#c9d1d9',
        'editorLineNumber.foreground': '#6e7681',
        'editorLineNumber.activeForeground': '#d1d5da',
        'editor.selectionBackground': '#3392FF44',
        'editor.lineHighlightBackground': '#6e76811a',
        'editorCursor.foreground': '#c9d1d9',
      }
    });
    monaco.editor.setTheme('github-dark');

    // Focus editor
    editor.focus();
  };

  const handleTemplateSelect = (templateKey) => {
    onChange(codeTemplates[templateKey]);
    setShowTemplates(false);
  };

  return (
    <div className="h-[70vh] flex flex-col">
      <div className="bg-[#21262d] px-4 py-2 border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-sm font-medium mr-4">JavaScript</div>
          <div className="relative">
            <button 
              onClick={() => setShowTemplates(!showTemplates)}
              className="text-xs text-gray-300 hover:text-white flex items-center gap-1"
            >
              <FaCode className="w-3 h-3 text-[#60a5fa]" />
              <span>Templates</span>
            </button>
            
            {showTemplates && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-[#161b22] border border-gray-700 rounded-md shadow-lg z-10">
                <div className="py-1">
                  {Object.keys(codeTemplates).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleTemplateSelect(key)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#30363d] hover:text-white"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={onRun}
          className="px-3 py-1 bg-[#2563ebcc] hover:bg-[#60a5fa99] text-white rounded-md text-sm flex items-center gap-1 transition-colors"
        >
          <FaPlay className="w-3 h-3" />
          <span>Run</span>
        </button>
      </div>
      
      <div className="flex-grow relative">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={onChange}
          options={editorOptions}
          onMount={handleEditorDidMount}
        />
        
        {/* Error marker */}
        {errorInfo && (
          <div 
            className="absolute left-0 bg-red-900/30 border-l-2 border-red-500" 
            style={{
              top: `${(errorInfo.line || 1) * 1.6}rem`,
              width: '100%',
              height: '1.6rem',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>
    </div>
  );
}
