'use client';

import Image from "next/image";
import axios from 'axios';
import { Fragment, Key, useEffect, useState } from "react";
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import AgentCard from "./agent-card";
import Navbar from "./navbar";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";

const baseURL = "https://valorant-api.com/v1/";

const filterOptions = [
  {
    id: 0, name: 'None', filter: (agent: any) => true
  },
  {
    id: 1, name: 'Duelist', filter: (agent: any) => agent.role.displayName === 'Duelist'
  },
  {
    id: 2, name: 'Initiator', filter: (agent: any) => agent.role.displayName === 'Initiator'
  },
  {
    id: 3, name: 'Controller', filter: (agent: any) => agent.role.displayName === 'Controller'
  },
  {
    id: 4, name: 'Sentinel', filter: (agent: any) => agent.role.displayName === 'Sentinel'
  },
  {
    id: 5, name: 'Base Conent', filter: (agent: any) => agent.isBaseContent
  }
];

export default function Home() {

  const [agentList, setAgentList] = useState<any[]>([]);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

  const handleFilter = (e: any) => {
    const value = e.target.value;
  };

  useEffect(() => {
    axios.get(baseURL + "agents?isPlayableCharacter=true").then((response) => {
      response.data.data.sort((a: any, b: any) => a.displayName < b.displayName ? -1 : 1);
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
            <Listbox value={selectedFilter} onChange={setSelectedFilter}>
              <ListboxButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Filter
                <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
              </ListboxButton>
              <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <ListboxOptions
                  anchor="bottom end"
                  className="bg-white w-52 mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 text-sm [--anchor-gap:var(--spacing-1)] focus:outline-none"
                >
                  <ListboxOption key={filterOptions[1].id} value={filterOptions[1]}
                                 className="group flex w-full items-center place-content-between gap-2 py-2 px-4 select-none text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Duelist
                    <CheckIcon className="invisible size-4 fill-rose-600 group-data-[selected]:visible" />
                  </ListboxOption>
                  <ListboxOption key={filterOptions[2].id} value={filterOptions[2]}
                                 className="group flex w-full items-center place-content-between gap-2 py-2 px-4 select-none text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Initiator
                    <CheckIcon className="invisible size-4 fill-rose-600 group-data-[selected]:visible" />
                  </ListboxOption>
                  <ListboxOption key={filterOptions[3].id} value={filterOptions[3]}
                                 className="group flex w-full items-center place-content-between gap-2 py-2 px-4 select-none text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Controller
                    <CheckIcon className="invisible size-4 fill-rose-600 group-data-[selected]:visible" />
                  </ListboxOption>
                  <ListboxOption key={filterOptions[4].id} value={filterOptions[4]}
                                 className="group flex w-full items-center place-content-between gap-2 py-2 px-4 select-none text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Sentinel
                    <CheckIcon className="invisible size-4 fill-rose-600 group-data-[selected]:visible" />
                  </ListboxOption>
                  <div className="my-1 h-px bg-gray-900/5" />
                  <ListboxOption key={filterOptions[5].id} value={filterOptions[5]}
                                 className="group flex w-full items-center place-content-between gap-2 py-2 px-4 select-none text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Base Content
                    <CheckIcon className="invisible size-4 fill-rose-600 group-data-[selected]:visible" />
                  </ListboxOption>
                  <div className="my-1 h-px bg-gray-900/5" />
                  <ListboxOption key={filterOptions[0].id} value={filterOptions[0]}
                                 className="group flex w-full items-center place-content-between gap-2 py-2 px-4 select-nonetext-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    None
                    <CheckIcon className="invisible size-4 fill-rose-600 group-data-[selected]:visible" />
                  </ListboxOption>
                </ListboxOptions>
              </Transition>
            </Listbox>
            </div>
          </div>
          
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {agentList
            .filter(selectedFilter.filter)
            .map((agent: any) => <AgentCard key={agent.uuid} agent={agent}/>)}
        </div>

      </main>
    </div>
  );
}
