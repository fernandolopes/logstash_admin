export function loadStatusStyle(status: string): string {

    switch (status) {
        case 'green': return 'success';
        default: return 'default';
    }
}