import { Toaster } from 'sonner'

const SonnerProvider = () => {
    return <Toaster
        toastOptions={{
            unstyled: true,
            classNames: {
                toast: 'flex items-center gap-2 px-5 py-4 rounded-xl shadow bg-primary w-72',
            },
        }}
        duration={1500}
    />
}

export default SonnerProvider