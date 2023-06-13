export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About us',
    description: 'We are a social media company',
}

export default async function About() {
    return (
        <main>
            <h1 style={{color: '#000'}}>About</h1>
            <p style={{color: '#000'}}>We are a social media company</p>
        </main>
    )
}