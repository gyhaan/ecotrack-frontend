const CollectorPendingCollection = () => {
    return (
        <div>
            <h4 className="font-semibold mb-1">Pending Collections</h4>
            <div>
                <div className="flex items-center gap-6">
                    <div className="flex gap-2 items-center">
                    <div>
                        <img src="/yellow.svg" alt="green" />
                    </div>
                    <span>{new Date().toDateString()}</span>
                    </div>
                    <button className="text-sm max-w-fit bg-green h-7 block font-body text-white px-3 disabled:cursor-not-allowed">Done</button>
                </div>
            </div>
        </div>
    )
}

export default CollectorPendingCollection