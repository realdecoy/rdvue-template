import { cva } from 'class-variance-authority'

export {default as Alert} from './r-alert.vue'
export {AlertDescription} from './alert-description'
export {AlertTitle} from './alert-title'


export const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'bg-destructive text-destructive-muted dark:border-destructive-muted [&>svg]:text-destructive-muted',
        success:
          'bg-green-500 text-white dark:border-green-500 dark:text-muted [&>svg]:text-muted',
        warning:
          'bg-yellow-500 text-white dark:border-yellow-500 dark:text-muted [&>svg]:text-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
