import { NodeProps } from '@xyflow/react'
import React, { memo } from 'react'
import NodeCard from './nodecard'
import NodeHeader from './nodeheader'
import { AppNodeData } from '@/types/appNode'
import { TaskRegister } from '@/constants/workflow/task/registry'
import NodeInputs, { NodeInput } from './nodeinputs'

type Props = {

}

const NodeComponent =memo ((props:NodeProps) => {
  const nodeData=props.data as AppNodeData

  const tasks=TaskRegister[nodeData.type]
  return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected}>
        <NodeHeader taskType={nodeData.type}/>
        <NodeInputs>
          {tasks.inputs.map((input)=>(
             <NodeInput key={input.name} input={input}/>

          ))}
         

        </NodeInputs>
    </NodeCard>
  )
})

export default NodeComponent
NodeComponent.displayName="NodeComponent"