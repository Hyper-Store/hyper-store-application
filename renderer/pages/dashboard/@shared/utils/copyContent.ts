import { toast } from "react-hot-toast"

type Props = {
    content: string,
    message: string
}

export const CopyContent = async (props: Props) => {
    await navigator.clipboard.writeText(props.content)
    toast.success(props.message)
    return;
}