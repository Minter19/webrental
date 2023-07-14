import FooterFragment from "../fragments/footerFragment";
import NavbarFragment from "../fragments/navbarFragment";



export default function BaseTemplate({children}) {
    return (
        <div>
            <NavbarFragment />
            <div className="min-h-[80vh]">
                {children}
            </div>
            <FooterFragment />
        </div>
    )
}