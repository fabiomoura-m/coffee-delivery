import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CompleteOrderContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

const confirmOrderValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o CEP')
});

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderValidationSchema)
    });

    const { handleSubmit } = confirmOrderForm;

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        console.log(data);
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer
                className="container"
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
                <CompleteOrderForm />
                <SelectedCoffees />
            </CompleteOrderContainer>
        </FormProvider>
    );
}
