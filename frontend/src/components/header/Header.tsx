import React from 'react'
import { Container, NavbarActions, NavbarBrand, NavbarLinks } from '..'

const Header = () => {
    return (
        <header>
            <Container className='bg-red-300 max-w-full'>
                {/* NavbarBrand */}
                <NavbarBrand />

                {/* NavbarLinks */}
                <NavbarLinks />

                {/* NavbarActions */}
                <NavbarActions />
            </Container>
        </header>
    )
}

export default Header