"use client"
import { WorkFlow } from '@prisma/client'
import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodes, useNodesState } from '@xyflow/react'
import React from 'react'
import "@xyflow/react/dist/style.css"
import { createWorkFlowNode } from '@/constants/workflow/createworkflownode'
import { TaskType } from '@/types/task'
import NodeComponent from './nodes/nodecomponent'

type Props = {
    workflow:WorkFlow
}
const nodeTypes={
    FlowScrapeNode:NodeComponent
}
const snapGrid:[number,number]=[50,50];
const fitViewOption={padding:1};

const FlowEditor = ({workflow}: Props) => {
    const [nodes,setNodes,onNodesChange]=useNodesState([
        createWorkFlowNode(TaskType.LAUNCH_BROWSER)
    ]);
    const [edges,setEdges,onEdgesChange]=useEdgesState([])
  return (
    <main className='h-full w-full'>
        <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        snapGrid={snapGrid}
        fitView
        fitViewOptions={fitViewOption}
        >
            <Controls position='top-left' fitViewOptions={fitViewOption}/>
            <Background variant={BackgroundVariant.Dots} gap={12} size={1}/>

        </ReactFlow>
    </main>
  )
}

export default FlowEditor