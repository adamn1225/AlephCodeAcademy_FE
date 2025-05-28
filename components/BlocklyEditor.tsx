'use client';

import { useEffect, useRef } from 'react';

// Add a TypeScript declaration for window.Blockly
declare global {
  interface Window {
    Blockly: any;
  }
}

export interface BlocklyEditorProps {
  xml?: string;
}

export default function BlocklyEditor({ xml }: { xml: string }) {
  const blocklyDiv = useRef(null);

  useEffect(() => {
    if (!window.Blockly || !blocklyDiv.current) return;

    const workspace = window.Blockly.inject(blocklyDiv.current, {
      toolbox: '<xml></xml>',
    });

    try {
      const xmlDom = window.Blockly.Xml.textToDom(xml);
      window.Blockly.Xml.domToWorkspace(xmlDom, workspace);
    } catch (e) {
      console.error('Failed to parse Blockly XML:', e);
    }
  }, [xml]);

  return <div ref={blocklyDiv} style={{ height: '480px', width: '100%' }} />;
}