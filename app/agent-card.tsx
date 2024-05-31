import Link from "next/link";

export default function AgentCard({agent}: {agent: any}) {

    const styles = {
        background: `linear-gradient(135deg, #${agent.backgroundGradientColors[0].slice(0,-2)}, #${agent.backgroundGradientColors[1].slice(0,-2)})`
    };

    return (
        <Link className="group relative m-4 max-w-sm rounded-3xl ring-1 ring-inset ring-gray-800/20 overflow-hidden transition ease-in-out duration-300 hover:shadow-lg" 
           style={styles}
           href={`/agent/${agent.uuid}`}>
            <img className="group-hover:-translate-y-1 transition ease-in-out duration-300" src={agent.fullPortrait} />
            <div className="p-4 absolute bottom-0 left-0">
                <h2 className="text-white font-bold text-xl">{agent.displayName}</h2>
                {/* <p className="text-gray-200">{agent.description}</p> */}
                <span className="inline-block bg-gray-200 text-gray-900 rounded-full mt-3 px-3 py-1 font-semibold">{agent.role.displayName}</span>
            </div>
        </Link>
    );
}