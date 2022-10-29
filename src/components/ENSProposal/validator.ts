import { encodeContenthash } from '@ensdomains/ui'
import { z } from 'zod'

// creating a schema for strings
export const ensProposalSchema = z.object({
  ensName: z.string().min(1),
  proposalAction: z.object({
    label: z.string(),
    value: z.string(),
  }),
  ensContentHash: z
    .string()
    .min(1)
    .refine(
      (value) => {
        const contentHash = encodeContenthash(value)

        if (contentHash.encoded === false) {
          return false
        }

        return true
      },
      {
        message: 'Must be a valid content hash',
      },
    ),
  proposal: z.object({
    description: z.string().min(10),
    title: z.string().min(3),
    tags: z.array(z.string()),
    url: z.string(),
  }),
})

export type IENSProposalFormContext = z.infer<typeof ensProposalSchema>
