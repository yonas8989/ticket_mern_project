"use client";
import React from "react";
import styles from "../css/customersTable.module.css";

const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];

export const CustomersTable: React.FC = () => {
  return (
    <section className={styles.customersSection}>
      <div className={styles.customersHeader}>
        <h2 className={styles.title}>All Customers</h2>
        <p className={styles.subtitle}>Active Members</p>
        <div className={styles.tableControls}>
          <div className={styles.searchInput}>
            <i className="ti ti-search" />
            <input type="text" placeholder="Search" className={styles.input} />
          </div>
          <div className={styles.sortDropdown}>
            <span>Short by:</span>
            <span className={styles.sortValue}>Newest</span>
            <i className="ti ti-chevron-down" />
          </div>
        </div>
      </div>

      <div className={styles.customersTable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.company}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.country}</td>
                <td>
                  <span
                    className={`${styles.statusBadge} ${styles[customer.status.toLowerCase()]}`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className={styles.tableFooter}>
        <p className={styles.showingEntries}>
          Showing data 1 to 8 of 256K entries
        </p>
        <div className={styles.pagination}>
          <button className={styles.pageBtn}>
            <i className="ti ti-chevron-left" />
          </button>
          <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>4</button>
          <span className={styles.pageDots}>...</span>
          <button className={styles.pageBtn}>40</button>
          <button className={styles.pageBtn}>
            <i className="ti ti-chevron-right" />
          </button>
        </div>
      </footer>
    </section>
  );
};
