'use client';

import Image from "next/image";
import axios from 'axios';
import { Fragment, Key, useEffect, useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import AgentCard from "./agent-card";
import Navbar from "./navbar";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";

const baseURL = "https://valorant-api.com/v1/";

export default function Home() {

  const [agentList, setAgentList] = useState<any>([]);

  useEffect(() => {
    axios.get(baseURL + "agents?isPlayableCharacter=true").then((response) => {
      setAgentList(response.data.data);
    })
  })

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto min-h-screen flex-col items-center justify-between px-24 py-8">
        
        <div className="flex items-baseline justify-between pb-6 pt-12 px-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Agents</h1>
          <div className="flex items-center">
            <div className="relative inline-block text-left">
            <Menu>
        <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          Sort
          <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="bg-white w-52 mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 text-sm [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 py-2 px-4 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                Name
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 py-2 px-4 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                Role
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 py-2 px-4 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                Something
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 py-2 px-4 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                Something else
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
            </div>
            
          </div>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {agentList.map((agent: any) => <AgentCard key={agent.uuid} agent={agent}/>)}
        </div>

      </main>
    </div>
  );
}
