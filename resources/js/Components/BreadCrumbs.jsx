import { Link } from "@inertiajs/react";

export default function BreadCrumbs({ breadcrumbs }) {
    return (
        <div className="breadcrumbs">
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={index}>
                    {index > 0 && <span className="separator">/</span>}
                    {breadcrumb.link ? (
                        <Link href={breadcrumb.link}>{breadcrumb.label}</Link>
                    ) : (
                        <span>{breadcrumb.label}</span>
                    )}
                </span>
            ))}
        </div>
    );
}
