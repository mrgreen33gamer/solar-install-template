'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Equipment Categories We Install',
    items: [
      { name: 'Tier-1 Panels',     type: 'brand', icon: '☀' },
      { name: 'String Inverters',  type: 'brand', icon: '☀' },
      { name: 'Microinverters',    type: 'brand', icon: '☀' },
      { name: 'Battery Storage',   type: 'brand', icon: '☀' },
      { name: 'EV Level 2',        type: 'brand', icon: '☀' },
      { name: 'Monitoring',        type: 'brand', icon: '☀' },
      { name: 'Racking Systems',   type: 'brand', icon: '☀' },
      { name: 'Ground Mounts',     type: 'brand', icon: '☀' },
    ],
  },
  {
    label: 'Credentials & Coverage',
    items: [
      { name: 'NABCEP-Aligned',       type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',     type: 'cert', icon: '✓' },
      { name: '25-Year Panel Support', type: 'cert', icon: '✓' },
      { name: '10-Year Workmanship',  type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Residential Solar',    type: 'tool', icon: '⚡' },
      { name: 'Commercial Solar',     type: 'tool', icon: '⚡' },
      { name: 'Battery Storage',      type: 'tool', icon: '⚡' },
      { name: 'EV Charger + Solar',   type: 'tool', icon: '⚡' },
      { name: 'System Monitoring',    type: 'tool', icon: '⚡' },
      { name: 'Solar Maintenance',    type: 'tool', icon: '⚡' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Quality Equipment, Accountable Installs',
  subtitle = 'We specify proven solar equipment and install it with NABCEP-aligned crews — no shortcuts on design, racking, or electrical.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.itemGrid}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
