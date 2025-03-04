"use client";
import React from "react";
import styles from "../css/Dashboard.module.css";
import { Sidebar } from "./Sidebar";
import { StatsCard } from "./StatsCard";
import { CustomersTable } from "./CustomersTable";
import { SearchInput } from "./SearchInput";

export const Dashboard: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.dashboardContainer}>
        <Sidebar />
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Evano 👋🏼,</h1>
            <SearchInput />
          </header>
          <section className={styles.statsCards}>
            <StatsCard
              icon="users"
              label="Total Customers"
              value="5,423"
              change={{ value: "16%", type: "positive", text: "this month" }}
            />
            <StatsCard
              icon="members"
              label="Members"
              value="1,893"
              change={{ value: "1%", type: "negative", text: "this month" }}
            />
            <StatsCard
              icon="active"
              label="Active Now"
              value="189"
              showActiveUsers
            />
          </section>
          <CustomersTable />
        </main>
      </div>
    </>
  );
};
