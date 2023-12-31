import { CouponProps, deleteCoupon } from "../../api/ServiceRequests";
import { useAuthHeader } from "react-auth-kit";

import "./styles.scss";

export function Coupon(props: CouponProps) {
    const header = useAuthHeader();

    return (
        <div className="card border-0 shadow p-4 d-flex">
            <div className="d-flex flex-column">
                <div className="d-flex flex-row w-100 justify-content-between">
                    <h1 className="fs-5 fw-bold text-success my-0">{props.name.toUpperCase()}</h1>
                    <div className="d-flex flex-column align-items-end">
                        <div>
                            <button 
                                className="btn btn-outline-danger py-1"
                                onClick={() => {
                                    deleteCoupon(header().substring(7), props.id, () => {
                                        if (props.onDelete) props.onDelete()
                                    });
                                }}
                            >x</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-danger fw-bold fs-6 mt-0 d-flex gap-2 align-items-center my-0"><h1 className="fs-5 fw-bold text-secondary my-0">Desconto:</h1>{props.percentage}%</h1>
                    <p className="text-secondary d-flex gap-2 py-0 my-0 expire"><p className="py-0 my-0">Vencimento:</p>{props.expirateAt}</p>
                </div>
            </div>
            <hr className="my-1" />
            <p className="fs-6 text-secondary mb-0">{props.description}</p>
        </div>
    );
}