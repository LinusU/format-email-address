declare namespace formatEmailAddress {
  interface Input {
    address: string
    name?: string
  }
}

declare function formatEmailAddress (input: formatEmailAddress.Input): string

export = formatEmailAddress
