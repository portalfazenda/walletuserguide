import { official } from './site';

export const pages = {
  'tangem': {
    title: 'Tangem: Wallet, App, Setup, Recovery and Support Guide',
    h1: 'Tangem Wallet Guide',
    description: 'Independent Tangem guide covering the wallet, app, setup, recovery, supported assets, security and common troubleshooting topics.',
    intro: 'Already using a Tangem Wallet? This independent guide organizes the most useful setup, app, recovery and troubleshooting resources in one place.',
    sections: [
      ['Start with the essentials', 'If you already own a Tangem card or ring, the most common next steps are installing the official app, completing setup, learning how backups work and understanding recovery options.'],
      ['Use official software', 'For wallet access, app installation, updates and security-sensitive actions, use Tangem’s official website, official app-store listings or official GitHub repository.'],
      ['Never share recovery secrets', 'No legitimate guide, support agent or website should ask you to send your seed phrase, private key or recovery words. Keep them offline and private.']
    ],
    links: [['Official Tangem website', official.tangem], ['Official Help Center', official.help]]
  },
  'tangem-wallet': {
    title: 'Tangem Wallet: How to Use Your Hardware Wallet Safely',
    h1: 'Tangem Wallet: Usage Guide',
    description: 'Learn how to use Tangem Wallet safely, access the official app, manage backups, understand recovery and find trusted support resources.',
    intro: 'This page is for people who already have a Tangem Wallet and want a clear path to setup, daily use and troubleshooting.',
    sections: [
      ['What you need', 'A compatible NFC-enabled smartphone and the official Tangem app are the core requirements for using the wallet.'],
      ['Daily use', 'The app is used to view balances and prepare actions, while the Tangem device is used to authorize wallet operations.'],
      ['Security habit', 'Before approving a transaction, verify the asset, network, recipient address and amount. Do not approve prompts you did not initiate.']
    ],
    links: [['Tangem Help Center', official.help], ['Tangem Security', official.security]]
  },
  'tangem-setup': {
    title: 'Tangem Setup: How to Set Up Tangem Wallet Safely',
    h1: 'Tangem Setup Guide',
    description: 'A simple Tangem setup guide for existing owners, with safe preparation steps and links to Tangem’s official setup resources and app.',
    intro: 'Setting up a Tangem Wallet should be done with the official app and without sharing any seed phrase, private key or access code with third parties.',
    sections: [
      ['Before setup', 'Use an NFC-enabled phone, install the official Tangem app from a trusted source and make sure you are in a private environment.'],
      ['Choose your backup method carefully', 'Tangem supports different setup approaches. Read the official guidance before choosing between device-based backup and seed-phrase options.'],
      ['After setup', 'Confirm that you can access the wallet, understand your backup arrangement and know where your recovery materials are stored before moving significant funds.']
    ],
    links: [['Official Tangem Help Center', official.help], ['Official Tangem app on Google Play', official.play], ['Official Tangem app on App Store', official.appstore]]
  },
  'tangem-app': {
    title: 'Tangem App: Official App Sources, Use and Safety Tips',
    h1: 'Tangem App Guide',
    description: 'Find safe sources for the Tangem app and learn how it is used with Tangem hardware wallets. Independent guide with official links.',
    intro: 'The Tangem app is the mobile interface used with Tangem hardware wallets. Install it only from official or clearly trusted sources.',
    sections: [
      ['What the app does', 'The app provides the interface for viewing assets, preparing transactions, managing wallet settings and interacting with supported services.'],
      ['Where to get it', 'Use Tangem’s official website, the official Google Play listing, the official App Store listing or Tangem’s official GitHub repository.'],
      ['Avoid fake apps', 'Check the publisher and source before installing. Never enter recovery words into a website or app you reached through an untrusted ad or message.']
    ],
    links: [['Google Play', official.play], ['App Store', official.appstore], ['Tangem GitHub', official.github]]
  },
  'tangem-app-download': {
    title: 'Tangem App Download: Official Android and iPhone Sources',
    h1: 'Tangem App Download',
    description: 'Download the Tangem app safely using official Google Play, App Store or Tangem GitHub sources. Independent download safety guide.',
    intro: 'This site does not host Tangem installation files. For safety, download the app only from official distribution channels.',
    sections: [
      ['Android', 'Use the official Google Play listing or Tangem’s official GitHub repository if you specifically need the official repository source.'],
      ['iPhone', 'Use the official Apple App Store listing.'],
      ['Before installing', 'Verify the listing and publisher, avoid unofficial APK mirrors and do not install files sent through direct messages or unknown websites.']
    ],
    links: [['Download from Google Play', official.play], ['Download from App Store', official.appstore], ['Official Tangem GitHub', official.github]]
  },
  'tangem-recovery': {
    title: 'Tangem Recovery: Device Loss, Backup and Safe Recovery Options',
    h1: 'Tangem Wallet Recovery Guide',
    description: 'Understand Tangem recovery options after losing a phone or device, with official recovery resources and critical seed phrase safety guidance.',
    intro: 'Recovery depends on how your wallet was originally configured. Do not enter a seed phrase into this website or send it to anyone.',
    sections: [
      ['Lost phone', 'Losing a phone does not automatically mean losing the wallet. Tangem documents how the wallet can be accessed using a compatible phone and the appropriate Tangem device or recovery setup.'],
      ['Lost Tangem device', 'Your options depend on whether you created backups and how the wallet was configured. Check Tangem’s official device-loss guidance before taking action.'],
      ['Seed phrase safety', 'If your setup uses a seed phrase, keep it private. Enter it only in an official wallet recovery flow you intentionally opened and verified.']
    ],
    links: [['Official device loss & recovery', official.recovery], ['Official seed phrase guidance', official.seed]]
  },
  'tangem-backup': {
    title: 'Tangem Backup: How Wallet Backup Works and What to Check',
    h1: 'Tangem Backup Guide',
    description: 'Learn the basics of Tangem backup, what to verify after setup and how to avoid common recovery mistakes.',
    intro: 'A backup plan should be understood before you rely on a hardware wallet for long-term storage.',
    sections: [
      ['Know your setup', 'Tangem wallets can be configured in different ways. Your recovery path depends on the method you selected during setup.'],
      ['Test your understanding', 'You should know what you would do if your phone or one Tangem device were lost, without exposing any secret information.'],
      ['Keep secrets private', 'Never upload, photograph for cloud storage, email or message a seed phrase unless you fully understand the security implications.']
    ],
    links: [['Tangem recovery guidance', official.recovery], ['Tangem seed phrase guidance', official.seed]]
  },
  'tangem-supported-coins': {
    title: 'Tangem Supported Coins and Networks: How to Check Compatibility',
    h1: 'Tangem Supported Coins and Networks',
    description: 'Learn how to check whether a coin, token or network is supported by Tangem before receiving or transferring crypto.',
    intro: 'Support can change over time, so always check Tangem’s live supported-assets directory before moving funds.',
    sections: [
      ['Check the network, not only the ticker', 'The same token can exist on several networks. Confirm that the exact network you plan to use is supported.'],
      ['Before receiving funds', 'Verify the address format and selected network in the Tangem app before copying or sharing a receiving address.'],
      ['Before sending funds', 'A wrong network can make recovery difficult or impossible. Match the sending and receiving networks exactly.']
    ],
    links: [['Official supported coins & networks', official.supported]]
  },
  'tangem-add-token': {
    title: 'Tangem Add Token: How to Find and Add Supported Assets',
    h1: 'How to Add a Token in Tangem',
    description: 'A practical guide to checking and adding supported tokens in the Tangem app without risking your wallet credentials.',
    intro: 'If an asset is supported but not visible on your main screen, use the app’s token-management tools rather than importing unknown contracts blindly.',
    sections: [
      ['Confirm support first', 'Check Tangem’s current supported-assets directory for the coin, token and network.'],
      ['Use the app token manager', 'Open the official Tangem app and use its asset-management interface to locate supported assets.'],
      ['Be careful with token contracts', 'When a custom contract is involved, verify it from a trusted blockchain source before adding it.']
    ],
    links: [['Supported assets', official.supported], ['Tangem Help Center', official.help]]
  },
  'tangem-send-crypto': {
    title: 'How to Send Crypto With Tangem Wallet Safely',
    h1: 'Send Crypto With Tangem',
    description: 'Safety-first guide for sending crypto with Tangem Wallet, including network, address, fee and confirmation checks.',
    intro: 'Crypto transactions are usually irreversible. Check every field before authorizing a transfer.',
    sections: [
      ['Choose the correct asset and network', 'Make sure the receiving platform supports the exact network selected in Tangem.'],
      ['Verify the address', 'Compare the destination address carefully. For large transfers, consider a small test transaction first.'],
      ['Review before signing', 'Check amount, network fee and destination before approving the transaction with your Tangem device.']
    ],
    links: [['Tangem Help Center', official.help]]
  },
  'tangem-receive-crypto': {
    title: 'How to Receive Crypto With Tangem Wallet Safely',
    h1: 'Receive Crypto With Tangem',
    description: 'Learn how to receive crypto with Tangem safely by checking supported networks and verifying the receiving address.',
    intro: 'The most important step when receiving crypto is matching the network used by the sender with the network of the receiving address.',
    sections: [
      ['Select the asset', 'Open the official Tangem app and select the asset you want to receive.'],
      ['Confirm the network', 'If an asset is available on multiple networks, select the same network the sender will use.'],
      ['Verify before sharing', 'Check the address displayed in the app before copying it. For significant transfers, use a small test transfer first.']
    ],
    links: [['Official supported networks', official.supported], ['Tangem Help Center', official.help]]
  },
  'tangem-support': {
    title: 'Tangem Support: Official Help Center and Safe Troubleshooting',
    h1: 'Tangem Support Guide',
    description: 'Find official Tangem support resources and learn how to avoid fake support agents, phishing and seed phrase scams.',
    intro: 'For account, wallet or device-specific help, use Tangem’s official support resources and never share recovery secrets.',
    sections: [
      ['Use official support', 'Start with Tangem’s official Help Center and official support channels.'],
      ['Watch for impersonators', 'Scammers often pretend to be wallet support. Legitimate support should not ask for your seed phrase or private key.'],
      ['Describe the problem safely', 'You can share device model, app version and error messages, but remove addresses or personal details when they are not necessary.']
    ],
    links: [['Official Tangem Help Center', official.help]]
  },
  'tangem-card-not-working': {
    title: 'Tangem Card Not Working? NFC and Connection Troubleshooting',
    h1: 'Tangem Card Not Working',
    description: 'Troubleshoot common Tangem card scanning and NFC issues safely before contacting official Tangem support.',
    intro: 'If your Tangem card is not scanning, start with basic NFC and phone checks before assuming the card is damaged.',
    sections: [
      ['Check NFC positioning', 'Phone NFC antennas are located in different areas. Move the card slowly around the phone’s NFC zone while following Tangem’s scanning guidance.'],
      ['Remove interference', 'Thick cases, metal accessories and other NFC cards can interfere with scanning.'],
      ['Try safe troubleshooting', 'Restart the app and phone, verify NFC is available, then check official Tangem support if the issue continues.']
    ],
    links: [['Tangem Help Center', official.help]]
  },
  'tangem-app-not-working': {
    title: 'Tangem App Not Working? Safe Troubleshooting Steps',
    h1: 'Tangem App Not Working',
    description: 'Troubleshoot Tangem app crashes, connection issues and wallet scanning problems using safe, non-destructive steps.',
    intro: 'Start with simple checks and avoid resetting a wallet unless you fully understand the consequences and have a verified recovery path.',
    sections: [
      ['Check the official app', 'Make sure you installed the genuine Tangem app from an official source and that your phone meets current requirements.'],
      ['Restart before resetting', 'Close and reopen the app, restart the phone and check connectivity before using destructive troubleshooting steps.'],
      ['Do not factory reset casually', 'A factory reset can remove wallet data from a device. Read Tangem’s official instructions before using any reset option.']
    ],
    links: [['Official Tangem Help Center', official.help], ['Official wallet reset guidance', 'https://tangem.com/en/help-center/app-functionality/wallet-reset/']]
  },
  'tangem-firmware': {
    title: 'Tangem Firmware: Does Tangem Need Firmware Updates?',
    h1: 'Tangem Firmware Explained',
    description: 'Learn how Tangem firmware works, why Tangem describes it as immutable and what that means for firmware update searches.',
    intro: 'Tangem states that its hardware-wallet firmware is loaded during manufacturing and cannot be modified or replaced afterward.',
    sections: [
      ['No normal firmware update flow', 'Unlike hardware wallets with updateable firmware, Tangem describes its firmware architecture as immutable.'],
      ['Why this matters', 'You should be suspicious of websites or messages telling you to download a Tangem card firmware updater or flash package.'],
      ['App updates are different', 'The Tangem mobile app can receive updates even though the hardware firmware architecture is described as non-updatable.']
    ],
    links: [['Official firmware & authenticity guidance', official.firmware], ['Tangem security resources', official.security]]
  },
  'tangem-security': {
    title: 'Tangem Security: Safe Use, Authenticity and Scam Prevention',
    h1: 'Tangem Security Guide',
    description: 'Independent Tangem security guide covering authenticity checks, safe app sources, recovery phrase protection and scam prevention.',
    intro: 'Hardware-wallet security depends on both the device and the way it is used. Most avoidable risks come from phishing, fake apps and exposed recovery secrets.',
    sections: [
      ['Use genuine software', 'Install the Tangem app only from sources linked by Tangem or from verified official app-store listings.'],
      ['Protect recovery secrets', 'Never disclose seed phrases, private keys or recovery words to support agents, websites, forms or strangers.'],
      ['Verify before acting', 'Treat urgent messages, airdrop claims, fake support chats and unexpected wallet prompts as suspicious until independently verified.']
    ],
    links: [['Official Tangem security center', official.security], ['Firmware & authenticity', official.firmware]]
  }
};

export const routeOrder = Object.keys(pages);
