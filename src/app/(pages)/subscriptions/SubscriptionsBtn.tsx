"use client";
import CustomToggleGroup from "@/components/molecules/btnsGroup/CustomToggleGroup";
import {
  SubscriptionToggle,
  type SubscriptionType,
  selectSubscription,
} from "@/store/features/Toggle/subscriptionToggleSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const items = [
  { label: "سنوي", value: "yearly" },
  { label: "شهري", value: "monthly" },
];

const SubscriptionsBtn = () => {
  const dispatch = useAppDispatch();
  const { SubscriptionType: currentSubscription } =
    useAppSelector(selectSubscription);

  const handleSubscriptionChange = (value: string) => {
    if (value && (value === "monthly" || value === "yearly")) {
      dispatch(SubscriptionToggle(value as SubscriptionType));
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-4">
      <h2 className="md:text-2xl font-semibold">
        <span className="text-primary mx-2">وفر 45%</span>
        عند الاشتراك السنوي
      </h2>
      <CustomToggleGroup
        Items={items}
        value={currentSubscription}
        onValueChange={handleSubscriptionChange}
      />
    </div>
  );
};

export default SubscriptionsBtn;
