import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Download, Plus } from "react-feather";
import { Table, IProps } from "..";
import { themeContext } from "../../../AppWrapper/Global";

import "@testing-library/jest-dom/extend-expect";

const DEFAULT_TABLE_PROPS: IProps = {
  title: "Some Table title",
  menuItems: [
    {
      label: "Create Item",
      onClick: jest.fn(),
      IconComponent: Plus,
    },
    {
      label: "Download Data",
      onClick: jest.fn(),
      IconComponent: Download,
    },
  ],
  paginatedDataState: {
    pageSize: 10,
    pageIndex: 1,
    sortBy: [{ id: "name", desc: true }],
    hiddenColumns: [],
  },
  setPaginatedDataState: jest.fn(),
  columns: [
    {
      Header: "Name Header",
      accessor: "name",
      filter: { _type: "string" },
    },
    {
      Header: "Age",
      accessor: "age",
      filter: { _type: "number" },
    },
    {
      Header: "Verified",
      accessor: "verified",
      disableSortBy: true,
      filter: {
        _type: "boolean",
        bag: [
          { color: "#00ff00", label: "Yes", value: "true" },
          { color: "#ff0000", label: "No", value: "false" },
        ],
      },
    },
    {
      Header: "Role",
      accessor: "role",
      disableSortBy: true,
      filter: {
        _type: "status",
        bag: [
          { color: "#00ff00", label: "Admin", value: "admin" },
          { color: "#fff000", label: "Editor", value: "editor" },
          { color: "#fff000", label: "User", value: "user" },
          { color: "#ff00f0", label: "Developer", value: "developer" },
        ],
      },
    },
    {
      Header: "Author",
      accessor: "author",
      filter: {
        _type: "list",
        bag: {
          onChange: jest.fn(),
          selections: [
            { id: "fb", name: "Facebook" },
            { id: "ggl", name: "Google" },
          ],
        },
      },
    },
    {
      Header: "Registered",
      accessor: "createdAt",
      filter: {
        _type: "date",
      },
    },
    {
      Header: "Actions",
      accessor: "__action__",
      disableSortBy: true,
      Cell: () => <p>Some Action</p>,
    },
  ],
  tableData: {
    data: {
      data: [
        {
          name: "React",
          age: 27,
          verified: "true",
          approved: "pending",
          role: "Admin",
          author: "Facbook",
          createdAt: new Date().toISOString(),
        },
        {
          name: "Angular",
          age: 28,
          verified: "true",
          role: "Editor",
          approved: "progress",
          author: "Goggle",
          createdAt: new Date().toISOString(),
        },
        {
          name: "Vue",
          age: 29,
          role: "User",
          verified: "false",
          approved: "done",
          author: "Evan Yue",
          createdAt: new Date().toISOString(),
        },
      ],
      pageIndex: 1,
      pageSize: 10,
      totalRecords: 200,
    },
    isLoading: false,
    error: false,
    isPreviousData: false,
  },
};

describe("Table", () => {
  it("should render data rows", () => {
    render(
      <ThemeProvider theme={themeContext}>
        <Table {...DEFAULT_TABLE_PROPS} />
      </ThemeProvider>
    );

    expect(screen.getByText("Some Table title")).toBeInTheDocument();
    // expect(screen.getByText("Create Item")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Angular")).toBeInTheDocument();
    expect(screen.getByText("Vue")).toBeInTheDocument();
    expect(screen.getByText("Name Header")).toBeInTheDocument();
  });
});