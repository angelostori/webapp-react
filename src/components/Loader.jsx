import { DotPulse } from "ldrs/react";
import "ldrs/react/DotPulse.css";

export default function Loader() {
    return (
        <div className="d-flex justify-content-center my-5">
            <DotPulse size="43" speed="1.3" color="black" />
        </div>
    );
}
