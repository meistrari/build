export function usePageNavigation() {
    const pageMetadata = {
        '/': {
            title: 'Home',
            icon: 'i-ph-house',
        },
        '/sample-page': {
            title: 'Sample Page',
            icon: 'i-ph-stack-simple',
        },
    } as const

    const route = useRoute()
    const currentPage = computed(() => pageMetadata[route.path as keyof typeof pageMetadata])

    return {
        currentPage,
        pageMetadata,
    }
}