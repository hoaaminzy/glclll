import React, { useState } from "react";
import { Select, DatePicker, TimePicker, Input } from "antd";
import moment from "moment";

const { Option } = Select;
const { RangePicker } = DatePicker;
const Filter3 = () => {
  const handleCityChange = () => {};

  return (
    <div className="d-flex gap-3 pt-4 align-items-center">
      <Select
        placeholder="Thành phố"
        style={{ width: "max-content" }}
        onChange={handleCityChange}
        options={[
          { value: "1", label: "Hồ Chí Minh" },
          { value: "2", label: "Hà Nội" },
          { value: "3", label: "Tỉnh thành khác" },
        ]}
        dropdownStyle={{ zIndex: 999999999 }}
      />
      <Select
        placeholder="Quận"
        style={{ width: "max-content" }}
        onChange={handleCityChange}
        options={[
          { value: "1", label: "Quận 1" },
          { value: "2", label: "Quận 2" },
          { value: "3", label: "Quận 3" },
        ]}
        dropdownStyle={{ zIndex: 999999999 }}
      />
      <DatePicker
        placeholder="Ngày"
        style={{ width: "20%" }}
        onChange={handleCityChange}
      />
      <RangePicker
        placeholder={["Bắt đầu", "Kết thúc"]}
        onChange={handleCityChange}
        style={{ width: "20%" }}
        format="HH:mm"
      />
      <Input
        placeholder="Sân"
        style={{ width: "max-content" }}
        onChange={handleCityChange}
      />
    </div>
  );
};

export default Filter3;
