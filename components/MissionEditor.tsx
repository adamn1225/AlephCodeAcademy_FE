'use client'

import React, { useEffect, useRef } from 'react'
import * as Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'
import 'blockly/blocks'

export default function MissionEditor({ xml }: { xml: string }) {
  const blocklyDiv = useRef<HTMLDivElement | null>(null)
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null)

  useEffect(() => {
    if (!blocklyDiv.current) return

    workspaceRef.current = Blockly.inject(blocklyDiv.current, {
      toolbox: {
        kind: 'flyoutToolbox',
        contents: [
          { kind: 'block', type: 'text_print' },
          { kind: 'block', type: 'text' },
        ],
      },
    })
    // Load initial XML
    Blockly.Xml.domToWorkspace(
        Blockly.utils.xml.textToDom(xml),
        workspaceRef.current
      )

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose()
      }
    }
  }, [xml])

  const runCode = () => {
    if (!workspaceRef.current) return
    const code = javascriptGenerator.workspaceToCode(workspaceRef.current)
    try {
      // eslint-disable-next-line no-eval
      eval(code)
    } catch (err) {
      alert('Error running code: ' + err)
    }
  }

  return (
    <div>
      <div className="border border-gray-300 rounded overflow-hidden h-[350px] mb-4" ref={blocklyDiv} />
      <button
        onClick={runCode}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Run Code
      </button>
    </div>
  )
}