import { useParams } from "react-router-dom"
import { MoreCardInformation } from "../components/MoreCard/MoreCardInform"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { getOneProguct } from "../redux/slices/productSlice";

export const MoreCard = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { oneProduct } = useSelector((state: RootState) => state.product);

    useEffect(() => {
        if (id) {
            const _id = Number(id);
            dispatch(getOneProguct(Number(_id)));

        }
    }, [id]);
    return (
			<>
            {oneProduct ? (
                <MoreCardInformation
					title={oneProduct.title}
					img={oneProduct.img}
					price={oneProduct.price}
                    id={oneProduct.id}
				/>
            ): (
                <div></div>
            )}
				
			</>
		)
}