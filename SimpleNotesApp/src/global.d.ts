interface Window {
    api: {
        getNotes: () => Promise<{id: string; title: string; content: string}[]>
    }
}