import React from 'react';
import { POLICIES } from '../game/types';
import './PoliciesSelect.css';

const NONE = 'none';
const SUPPORT = 'support';
const OPPOSE = 'oppose';

export default function PoliciesSelect({ character, onUpdate, onBack, onNext }) {
  const supported = character?.supportedPolicies || [];
  const opposed = character?.opposedPolicies || [];

  const getStance = (policyId) => {
    if (supported.includes(policyId)) return SUPPORT;
    if (opposed.includes(policyId)) return OPPOSE;
    return NONE;
  };

  const setStance = (policyId, stance) => {
    const newSupported = stance === SUPPORT
      ? [...supported.filter((id) => id !== policyId), policyId]
      : supported.filter((id) => id !== policyId);
    const newOpposed = stance === OPPOSE
      ? [...opposed.filter((id) => id !== policyId), policyId]
      : opposed.filter((id) => id !== policyId);
    onUpdate({ supportedPolicies: newSupported, opposedPolicies: newOpposed });
  };

  return (
    <div className="policies-select">
      <button type="button" className="policies-select__back" onClick={onBack}>
        ← Back
      </button>
      <h2 className="policies-select__title">Policies</h2>
      <p className="policies-select__hint">
        Choose which policies you support and oppose. This shapes your platform and coalition.
      </p>
      <div className="policies-select__list">
        {POLICIES.map((policy) => {
          const stance = getStance(policy.id);
          return (
            <div key={policy.id} className="policies-select__row">
              <span className="policies-select__name">{policy.name}</span>
              <div className="policies-select__buttons">
                <button
                  type="button"
                  className={`policies-select__btn policies-select__btn--support ${stance === SUPPORT ? 'policies-select__btn--on' : ''}`}
                  onClick={() => setStance(policy.id, stance === SUPPORT ? NONE : SUPPORT)}
                >
                  Support
                </button>
                <button
                  type="button"
                  className={`policies-select__btn policies-select__btn--oppose ${stance === OPPOSE ? 'policies-select__btn--on' : ''}`}
                  onClick={() => setStance(policy.id, stance === OPPOSE ? NONE : OPPOSE)}
                >
                  Oppose
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button type="button" className="policies-select__next" onClick={onNext}>
        Next: Difficulty
      </button>
    </div>
  );
}
